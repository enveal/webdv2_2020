const {Router}= require('express')
const {
    findAllPosts,
    createNewPost
}=require('../../controllers/posts')

const route=Router();

route.get('/',async(req,res)=>{
    const posts=await findAllPosts(
        res.status(200).send(posts)
    )
})
route.post('/',async(req,res)=>{
    const {userid,title,body}=reqq.body
    if((!userid)||(!title)||(!body)){
        res.status(400).send({
            error:'need title,body,userid to post'
        })
    }
    const post=await createNewPost(userId,title,body)
})

module.exports={
    postsRoute:route
}