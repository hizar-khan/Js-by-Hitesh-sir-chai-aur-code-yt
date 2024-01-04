const form = document.querySelector('form')

// when we submit form it went to sever ,but here we want to stop form from sever
//

form.addEventListener("submit" , (e) => {
    e.preventDefault() // use to stop submission of form

    const height = parseInt(document.querySelector('#height').value) // GETTING height  VALUE
    const weight = parseInt(document.querySelector('#weight').value) // getting weight value
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
         results.innerHTML = `Please give a valid height ${height}`;
         results.style.color = 'red'
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
         results.innerHTML = `Please give a valid weight ${weight}`;
         results.style.color = 'red'
    }
    else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    // showing bmi results
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
        results.innerHTML = ` ${bmi} Your are Under Weight bcz , Under Weight = Less than 18.6`
    }
    if(bmi === 18.6 && bmi === 24.9 ){
        results.innerHTML = ` ${bmi} Your are Normal Weight bcz , Normal Range = 18.6 and 24.9 `
    }
    if(bmi > 24.9){
        results.innerHTML = ` ${bmi} Your are Over Weight bcz , Overweight = Greater than 24.9`
    }
    }

})