$('#comment-btn').click(() => {
    let userId = JSON.parse(window.localStorage.user).id
    let postId =window.localStorage.postId;
    let title = $('#c-title').val()
    let body = $('#c-body').val()
    $.post('/api/comments', { userId, postId, title, body}, () => {
      $('#content').load('/components/all-posts.html')
    })
 
  })