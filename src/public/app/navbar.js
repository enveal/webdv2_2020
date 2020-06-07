let navlinks = $('.navbar-nav .nav-link')

navlinks.click((event) => {
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})