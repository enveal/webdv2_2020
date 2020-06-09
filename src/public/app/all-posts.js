// function loadPosts() {
//     $.get('/api/posts', (posts) => {
//       for (let p of posts) {
//         $('#posts-container').append(
//           $(`
//           <div class="col-4">
//             <div class="card m-2">
//               <div class="card-body">
//                 <h5 class="card-title">${p.title}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
//                 <p class="card-text">
//                   ${p.body.substr(0, 200)}
//                   <a href="#">...read more</a>
//                 </p>
//                 <a href="#" class="card-link" data-component="comment" post-component=${p.id}>Comment</a>
//                 <a href="#" class="card-link">Like</a>
//               </div>
//             </div>
//           </div>
//             `,
//             $('.card-body .card-link').click((event) => {
//               let commentUrl = `/components/${$(event.target).attr('data-component')}.html`
//               console.log(commentUrl)
//               $('#content').load(commentUrl)
//             }),
//             $('#comment-btn').click(() => {
//               console.log("njncjasl")
//               let userId = JSON.parse(window.localStorage.user).id
//               let postId =p.id
//               let title = $('#c-title').val()
//               let body = $('#c-body').val()
//               $.post('/api/comments', { userId, postId, title, body}, () => {
//                 $('#content').load('/components/all-posts.html')
//               })
           
//             }))
//         )
//       }
//     })
   
//   }
function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) { 
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">
                ${p.body}<span id"dots">...</span><span id ="more" style="display:none;">$${p.body.substr(200,p.body.length)}</span>
                <a href="#">read more</a>
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
function myFunc(x){
  console.log(x)
   let commentUrl = `/components/comment.html`
             //console.log(commentUrl)
             $('#content').load(commentUrl) 
             window.localStorage.postid=JSON.stringify(x)
}



  
  