const axios = require('axios')
const users = async () => {
	const users = await axios.get('https://jsonplaceholder.typicode.com/users')
	return users.data
}

module.exports =  users
