const container = document.querySelector('.recherche');
const nav = document.querySelector('.recherche');

document.addEventListener('DOMContentLoaded',function() {
    window.addEventListener('scroll',function(e){
        if(this.window.scrollY > 500){
            nav.classList.add('hideRecherche1');
        }else{
            nav.classList.remove('hideRecherche1');
        }
    })
})

