const request = require('request');
var getRequest = () => {
	request({
		url: `http://localhost:3000/containers/4`,
		json: true
	}, (error, response, body) => {
		if (error){
			console.log('Unable to retreive data from Container API');
		}
		else if(response.statusCode=== 400) {
			console.log('Unable to the provided Container');
		}
		else if(response.statusCode === 200)
		{
			console.log('body',body);
		}
	});

}
getRequest();