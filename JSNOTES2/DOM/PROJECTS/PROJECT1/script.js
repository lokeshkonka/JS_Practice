const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
const header = document.querySelector('h3')
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
       console.log( e.target.id)
        
        body.style.backgroundColor = e.target.id;
        header.innerText = e.target.id;
        
    })
    
})