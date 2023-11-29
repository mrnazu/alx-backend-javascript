export default function getFullResponseFromAPI(success){
	new Promise(function(resolve, reject){
		if(true){
			resolve({
				"status": 200,
				"body": "Success"
			})else{
				reject('The fake API is not working currently')
			}
		}
	})
}
