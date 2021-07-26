const form = document.getElementById('form-example');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputs = event.target.querySelectorAll('input, select, textarea');
    let formData = {};

    for(let item of inputs) {
        formData[item.name] = item.value;
    }

    localStorage.setItem(
        'formData',
        JSON.stringify(formData)
    );
});


function preFillForm() {
    if(localStorage.formData) {

        let inputs = form.querySelectorAll('input, select, textarea');
        let parsedData = JSON.parse(localStorage.formData);

        for(let item of inputs) {
            item.value = parsedData[item.name];
        }

    } else {
        console.log('Юзер пришел первый раз!')
    }
}

preFillForm();