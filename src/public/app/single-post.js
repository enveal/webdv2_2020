let spostId =window.localStorage.spostId;
function loadSinglePost(){
    $.get(`/api/posts/s/${spostId}`, {}, (posts) => {
        for (let p of posts) { 
        $('#posts-container').append(
        $(`
              <div class="col-4">
              <div class="card m-2">
              <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">
                    ${p.body}
                  </p>
                  <a href="#" class="card-link" onClick=myFunc(${p.id})>Comment</a>
                </div>
              </div>
            </div>
              `
              
            ))
        }
      })
}

function loadComments() {
  $.get(`/api/comments/posts/${spostId}`, (comments) => {
    for (let c of comments) {
      console.log('working fine')
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${c.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${c.user.username}</h6>
              <p class="card-text">
                ${c.body}
                <a href="#">...read more</a>
              </p>
              <a href="#" class="card-link">Comment</a>
              <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>
        
        `)
      )
    }
  })
}