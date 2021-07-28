const form = document.getElementById('form-example');
// console.log(form)

form.addEventListener('submit', function (event) {
        event.preventDefault();

        let inputs = event.target.querySelectorAll('input, textarea, select');

        let values = {};

        inputs.forEach(function (item)  {
            values[item.name] = item.value;
        })
        localStorage.setItem('form', JSON.stringify(values));
    });


document.addEventListener('DOMContentLoaded', function () {
    if(!localStorage.form) return;

    let values = JSON.parse(localStorage.form);

    let inputs = document.querySelectorAll('#form-example input, #form-example textarea, #form-example select');

    let checkBox = document.querySelector('input[type = checkbox]');
    console.log(values[checkBox.name])
    console.log(checkBox)

    if(values[checkBox.name] === 'on'){
        checkBox.checked = true;
        checkBox.setAttribute('checked','checked')
    }


    for(let input of inputs) {
        input.value = values[input.name]
    }


    console.log(inputs)


})




