const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock")

// let date = new Date()
// clock.innerHTML = date.toLocaleTimeString() // this will not update the clock time to time

// to get regular updated clock , we will use the following method
// so extraIngetlent folks will say use cronjob .. but this is advanced thing ,, here we will use simple method
// we will use setINterval()

setInterval( () => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000) 
// it will update the clock after each second
