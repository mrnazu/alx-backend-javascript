function getResponseFromAPI(){
	return new Promise(function(resolve, reject){
		const fetchData = getResponseFromAPI()

		if(fetchData){
			resolve('Fetched Data!')
		}else{
			reject('Faild!');
		}
	});
}
