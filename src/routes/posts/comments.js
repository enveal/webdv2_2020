const { Router } = require('express')
const {Comments}=require('../../db/models')
const{createComment}=require('../../controllers/comments')

Router.post("/", async (req, res) => {
  try {
    let { user_id, post_id, comment_body } = req.body;
    if (!user_id || !post_id || !comment_body) {
      res.status(403).send("Bad Request");
    } else {
      let comment = await createComment(user_id, post_id, comment_body);
      if (comment) {
        res.status(201).send(comment);
      } else {
        res.status(501).send("not created Please try again");
      }
    }
  } catch (e) {
    res.status(501).send(e);
  }
});

Router.get("/:post_id", async (req, res) => {
  try {
    let allComments = await Comments.findAll({
      where: {
        postPostId: req.params.post_id,
      },
    });
    res.status(200).send(allComments);
  } catch (e) {
    console.log(e);
    res.status(404).send("Not Found");
  }
});

module.exports = {
  commentsRoute
}