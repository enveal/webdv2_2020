
function myPosts() {
    const userId = JSON.parse(window.localStorage.user).id;
    console.log(userId);
    $.get(`/api/posts/${userId}`, {}, (posts) => {
      for (let p of posts) { 
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                  ${p.body.substr(0,200)} 
                  <a href="#" class="read_more" onClick=myPost(${p.id})>read more</a>
                  <span class="more_text" style="display:none;"> ${p.body.substr(200,p.body.length)}</span>
                </p>
                <a href="#" class="card-link" onClick=myFunc(${p.id})>Comment</a>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>
            `
            
          ))
      }
    })
  }
  function myPost(y){
    let postUrl=`/components/single-post.html`
              $('#content').load(postUrl)
              window.localStorage.spostId=JSON.stringify(y)
  }
  
  function myFunc(x){
    console.log(x)
     let commentUrl = `/components/comment.html`
               //console.log(commentUrl)
               $('#content').load(commentUrl) 
               window.localStorage.postId=JSON.stringify(x)
  }
 