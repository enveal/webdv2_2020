const { Router } = require('express')
const {
  findAllPosts,
  createNewPost,
  getPostsbyUsername
} = require('../../controllers/posts')

const route = Router()

route.get('/', async (req, res) => {
  const posts = await findAllPosts()
  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  const { userId, title, body } = req.body
  
  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await createNewPost(userId, title, body)
  res.status(201).send(post)
})

route.get("/:id", async function (req, res) {
  let posts;
  posts = await getPostsbyUsername(req.params.id)
  
  console.log(posts);
  
  if(posts){
    res.status(200).send(posts)
  }else{
    res.status(400).send({
      error: 'No such user id or username'
    })
  }

})


module.exports = {
  postsRoute: route
}