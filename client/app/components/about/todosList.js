'use strict';

var TodosList = {
	list: [{
			jist:"git",
			description:"Create a git repository on github.com",
			completed:true
		},{
			jist:"version",
			description:"Use AngularJS 1st version",
			completed:true
		},{
			jist:"webpack",
			description:"Configure webpack.config.js",
			completed:true,
			subitems: [ {
					description:'Babel + es6',
					completed: true
				},{
					description:'Less to css compilation. USED scss instead.',
					completed: false
				},{
					description:'Implement NORMAL PROJECT ARCHITECTURE'+
					 	'(.gitignore, src, build, each component should be presented in separated files using es6 module system)',
					completed: true
				}
			]
		},{
			jist:"simple markup",
			description:"Create some simple markup (of course use routing for the pages, we create SPA)",
			completed:true,
			subitems: [ {
					description:'Authorization',
					completed: false
				},{
					description:'Main page',
					completed: true
				},{
					description:'About author',
					completed: true
				}
			]
		},{
			jist:"map",
			description:"Draw simple map with point of your geolocation",
			completed:true,
			subitems: [ {
					description:'Implement zoom in/out buttons on a map',
					completed: true
				},{
					description:'Click on a map has to create a marker',
					completed: true
				}
			]
		},{
			jist:"save and show",
			description:"Implement save and show buttons",
			completed:true,
			subitems: [ {
					description:'save button saves all the created markers, show button – shows it',
					completed: true
				},{
					description:'When clicking on the save button all markers should be sent to the server',
					completed: true
				}
			]
		},{
			jist:"back-end", 
			description:"Create a back-end ",
			completed:true,
			subitems: [ {
					description:'(node.js + express + mongodb)',
					completed: true
				},{
					description:'Create  a user api',
					completed: true
				},{
					description:'Create an api to save location array',
					completed: true
				},{
					description:'Create a GET request to fetch all saving markers',
					completed: true
				}
			]
		},{
			jist:"create list",
			description:"Create list with type of objects to be chosen" +
						"(pharmacies, gas stations, schools,  restaurants)" +
						"so click on the list item has to draw markers on the map with the closest chosen objects",
			completed:true
		}
	]
};
module.exports = TodosList;
