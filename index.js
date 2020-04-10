const apis = require('./apis/api.js')

callUsersApi = async () => {
    let users_list = await apis.users()
    let html = '<ul>'
    users_list.map((value) => {
        html += ('<li>' + value.name + '</li>')
    })
    html += '</ul>'
    document.getElementById('users').innerHTML = html
}

callPostsApi = async () => {
    let postList = await apis.posts()
    let postsHtml = '<ul>'
    postList.map((post) => {
        postsHtml += '<li>' + post.title + '</li>'
    })
    postsHtml += "</ul>"
    document.getElementById('posts').innerHTML = postsHtml
}

callUsersApi()
callPostsApi()