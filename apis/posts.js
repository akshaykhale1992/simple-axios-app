const axios = require('axios')

const posts = async() => {
    let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return posts.data
}

module.exports = posts