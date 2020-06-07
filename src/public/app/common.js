$(() => {
    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#content').load('/components/all-posts.html')
    $('#footer').load('/components/footer.html')
})

function loginIfNeeded(){
    
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
   
    console.log(currentUser)
    if(!currentUser){
        $.post('/api/users', {} , (user) => { 
            if(user){
                window.localStorage.user = JSON.stringify(user)
                console.log('registered current user as  ' + user.username)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    }
    else {
        console.log('resuming session as', currentUser.username)
        $('#nav-username').text(currentUser.username)
    }
}