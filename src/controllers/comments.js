const { Users, Posts, Comments} = require('../db/models')

async function addComment( userId, title, body, postId ){
    const comment = await Comments.create({
        userId,
        title,
        body,
        postId
    })
    return comment
}

async function commentOfUser( id ){
    let where = {}
    if(id.userId){ where.userId = id.userId}
    const userComments = await Comments.findAll({
        include : [ Users , Posts],
        where 
    })

    return userComments
}

async function commentOfPost( id ){
    const postComments = await Comments.findAll({
        include : [ Users, Posts],
        where : { postId : id}
    })

    return postComments
}

module.exports = {
    addComment,
    commentOfUser,
    commentOfPost
}
