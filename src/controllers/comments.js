const { Users, Comments, Posts } = require("../db/models")

async function createComment(user_id, post_id, comment_body) {
    try {
      let user = await Users.findOne({
        where: {
          user_id,
        },
      });
      let post = await Posts.findOne({
        where: {
          post_id,
        },
      });
    
      if (user && post) {
        return await Comments.create({
          comment_body,
          userUserId: user_id,
          postPostId: post_id,
        });
      } else {
        console.log("err");
        return null;
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  module.exports = {
    createComment,
  };