const form = document.getElementById('form-example');
console.log(form)

form.addEventListener("submit", function (event){

    event.preventDefault()

    let data = event.target.querySelectorAll('input, select, textarea')

    let values = {}

    data.forEach(function (item){

        values[item.name] = item.value
    })



    // let jsArr = JSON.stringify(values)

    localStorage.setItem('info',JSON.stringify(values))

    // stringify => parse
    // console.log(jsArr)
        console.log(values)
    // console.log(data)
    // console.log(event.target)
})

document.addEventListener('DOMContentLoaded',function (){

    if(!localStorage.form) return;

    let values = JSON.parse(localStorage.form)

    let inputs = document.querySelectorAll('#form-example input, #form-example textarea, #form-example select')


    for(let input of inputs) {
        input.value = values[input.name]
    }

    console.log(inputs)

})


