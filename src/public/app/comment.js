$('#comment-btn').click(() => {
    let userId = JSON.parse(window.localStorage.user).id
    let postId =window.localStorage.postId;
    let title = $('#c-title').val()
    let body = $('#c-body').val()
    console.log(userId,postId,title,body)
    
    $.post('/api/comments', { userId, postId, title, body}, () => {
      $('#content').load('/components/all-posts.html')
    })
 
  })