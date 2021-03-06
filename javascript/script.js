// constant
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//prevent  submiting
 form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
//error function
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
//success function
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
//email validation
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//input validations
const validateInputs = () => {
    
    var areAllFieldsOk = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
        areAllFieldsOk = false;
    } 
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        areAllFieldsOk = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        areAllFieldsOk = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        areAllFieldsOk = false;
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 character')
        areAllFieldsOk = false
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        areAllFieldsOk = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        areAllFieldsOk = false;
    } else {
        setSuccess(password2);
    }


    if(areAllFieldsOk === false){
        document.getElementById('hide').style.visibility = 'hidden';
    }else{
        document.getElementById('hide').style.visibility = 'visible';
    }
};

//Privacy policy
$(function () {
    $("a[class='Update']").click(function () {
        $("#myModal").modal("show");
        return false;
    });
  
});



//agree button checked
var agreeButton = document.getElementById( 'accept-conditions');
agreeButton.addEventListener('click', event => {
    var checkbox = document.getElementById('invalidCheck');
    if( checkbox.checked = true){
        document.querySelector('.invalid-feedback').style.visibility='hidden';
       var button= document.getElementById('button-disable');
       button.style.removeProperty('pointer-events');
       button.style.opacity='1';
    }
    else if(checkbox.checked==false){
        document.querySelector('.invalid-feedback').style.visibility='visible';
    }
     
});



