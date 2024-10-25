window.onload = function() {
    document.querySelector('.blog-sidebar div:nth-of-type(3) .list-unstyled li:nth-child(2)').style.display = 'none'
}

let rimuovere = document.querySelector('.jumbotron div:nth-of-type(1) p:nth-of-type(2) a')
rimuovere.addEventListener('click', function(event){
    event.preventDefault()
   document.querySelector('.jumbotron div:nth-of-type(1)').style.display = 'none'
})


let autore = document.querySelectorAll('.blog-post p:first-of-type a')

    for(let i = 0 ; i < autore.length; i++){
        autore[i].addEventListener('mouseover', function(){
         alert(autore[i].textContent)
    })
}
    

