const fetch = require('node-fetch');

var search = ()=> {
	console.log('this.state', this.state);        
	const FETCH_URL = `http://localhost:3000/containers/4`    

	var myOptions = {
	  method: 'GET',
	  mode: 'no-cors',
	  cache: 'default'
	};

	fetch(FETCH_URL, myOptions)
	  .then(response => {
		  response.json();
		  console.log(response);
		})
		.then(json => {
			console.log('Container', json)
		});

  }

  search();