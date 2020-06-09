function myPosts() {
    const userId = JSON.parse(window.localStorage.user).id;
    console.log(userId);
    //let user = JSON.parse(window.localStorage.user).user_id;
    // $.get(`/api/posts?userId=${userId}`, (posts) => {
     
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
                  ${p.body}
                  <a href="#">...read more</a>
                </p>
                <a href="#" class="card-link" data-component="comment">Comment</a>
                <a href="#" class="card-link"></a>
              </div>
            </div>
          </div>
           `,
           $('.card-body .card-link').click((event) => {
            let commentUrl = `/components/${$(event.target).attr('data-component')}.html`
            $('#content').load(commentUrl)
          }),
          $('#comment-btn').click(() => {
            let userId = JSON.parse(window.localStorage.user).id
            let postId =p.id
            let title = $('#c-title').val()
            let body = $('#c-body').val()
            $.post('/api/comments', { userId, postId, title, body}, () => {
              $('#content').load('/components/all-posts.html')
            })
         
          }))
        )
      }
    })
  }

 