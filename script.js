document.getElementById('registration').addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;


    if (firstname.length < 6)
        errors.firstname = 'first name must unclude more than 6 symblos';
    else if (firstname == '')
        errors.firstname = 'First name cannot be empty';

    if (lastname.length < 6)
        errors.lastname = 'Last name must unclude more than 6 symblos';
    else if (lastname == '')
        errors.lastname = 'Last name cannot be empty';

    let password = document.getElementById("Password").value;
    let password2 = document.getElementById('Password2').value;
    let address = document.getElementById('address').value;
    let text = document.getElementById('text').value;


    if (password != password2)
        errors.password2 = 'Passwords do  not match';

    if (password == '')
        errors.Password = 'Password cannot be empty';

    if (password2 == '')
        errors.Password2 = 'Password cannot be empty';

    if (address == '')
        errors.address = 'Address cannot be empty';

    if (text == '')
        errors.text = 'Description field cannot be empty';



    let agree = document.getElementById('agree').checked;
    if (agree == false) {
        errors.agree = 'you must agree our terms and conditions';
    }

    let age = false;
    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }

    });
    if (!age) {
        errors.age = 'please select your age';

    }

    console.log(errors);


    form.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML = '';

    });

    for (let item in errors) {
        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
});


let toggleIconEye = document.getElementById('toggleIcon');
let toggleIconEye1 = document.getElementById('toggleIcon1');
let passwordshow = document.getElementById('Password');
let passwordrepeat = document.getElementById('Password2');

showhidepassword = () => {
    if (passwordshow.type == 'password') {
        passwordshow.setAttribute('type', 'text');
        toggleIconEye.classList.add('fa-eye-slash');
    } else {
        toggleIconEye.classList.remove('fa-eye-slash');
        passwordshow.setAttribute('type', 'password');
    }
}
toggleIconEye.addEventListener('click', showhidepassword);

showhidepassword = () => {
    if (passwordrepeat.type == 'password') {
        passwordrepeat.setAttribute('type', 'text');
        toggleIconEye1.classList.add('fa-eye-slash');
    } else {
        toggleIconEye1.classList.remove('fa-eye-slash');
        passwordrepeat.setAttribute('type', 'password');
    }
}
toggleIconEye1.addEventListener('click', showhidepassword);


function validation() {
    let emailfield = document.getElementById('address').value;
    let spantext = document.getElementById('error_address');
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailfield.match(emailStructure)) {
        spantext.innerHTML = 'Your Email is valid';
        spantext.style.color = 'green';
    } else {
        spantext.innerHTML = 'Your Email is not valid';
        spantext.style.color = 'red';
    }


}