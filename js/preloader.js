document.body.onload = function() {
    setTimeout(() => {
        let preloader = document.getElementById('pagePreloader')
        if(! preloader.classList.contains('done')){
            preloader.classList.add('done')
        }
    }, 1);
}