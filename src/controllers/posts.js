const {Users,Posts}=require('../db/models')

async function createNewPost(userId,title,body){
    const post=await Posts.create({
    title,
    body,
    userId
})
return post
}

async function findAllPosts(query){
    const posts =await Posts.findAll({
        include:[Users]
    })
    return posts
}

module.exports={
    createNewPost,
    findAllPosts
}