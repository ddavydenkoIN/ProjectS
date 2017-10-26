module.exports = function(app, db) {
	app.get('/map/getMarkers', (req, res) => {
		db.collection('markers').find({}, {_id: 0}).toArray(function(err, items) {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(items);
        }          
    });    	
  });
  app.get('/map/getByCategory', (req, res) => {
    var type = req.param('type');
    db.collection('markers').find({"type": type}, {'_id' : 0, 'type': 0}).toArray(function(err, items) {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(items);
        }          
    });     
  });
 	app.post('/map/saveMarkers', (req, res) => {
 		var markersArray = req.body;
 		db.collection('markers').insert(markersArray, (err, result) => {
    		if (err) { 
      		res.send({ 'error': 'An error has occurred' }); 
    		} else {
      		res.send(result.ops[0]);
    		}
  	});
	});
};