$('#write-btn').click(() => {
  const userId = JSON.parse(window.localStorage.user).id
  const title = $('#p-title').val()
  const body = $('#p-body').val()
  console.log(userId,title,body)

  $.post('/api/posts', { userId, title, body }, (data) => {
    window.alert('Your post is added')
    $('#content').load('/components/my-posts.html')
    $('.nav-item .active').removeClass('active')
    $("[data-components='my-posts']").addClass('active')
  })
})
