const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(button => {
 button.addEventListener('click', (events) => {
    
    if (events.target.id === 'grey') {
        body.style.backgroundColor = 'grey'
    }
    if (events.target.id === 'white') {
        body.style.backgroundColor = 'white'
    }
    if (events.target.id === 'blue') {
        body.style.backgroundColor = 'blue'
    }
    if (events.target.id === 'yellow') {
        body.style.backgroundColor = 'yellow'
    }
   
   

 })
})
