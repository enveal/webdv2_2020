const { Router } = require('express')

const { commentOfPost, commentOfUser, addComment} = require('../../controllers/comments')

const route = Router()

route.get('/users', async( req, res) => {
  const userId = req.query.userId;
  //if(isNaN(parseInt(req.query))){
    if(isNaN(userId)){
   return res.status(400).send({
     error : "need userId to to find the comment"
   })
  }
  const userComment = await commentOfUser(req.query)
  res.status(200).send(userComment)
})

route.get("/posts/:id", async function (req, res) {
 // console.log("===========",req.params)
  let comments;
  comments = await commentOfPost(req.params.id)
  
  console.log(comments);
  res.status(200).send(comments)

})

route.post('/', async (req, res) => {

  const {userId, title, body, postId} = req.body

  if((!userId) || (!title) || (!body) || (!postId)){
    return res.status(400).send({ error : "Need userId, title, body, postId to create a comment"})
  }

  const comment = await addComment(userId, title, body, postId)
  res.status(200).send(comment)
})


module.exports = {
  commentsRoute: route
}