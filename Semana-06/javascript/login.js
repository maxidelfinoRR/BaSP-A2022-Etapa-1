window.onload = function () {
    var loginBtn = document.getElementsByClassName('loginBtn')[0];
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailOk = document.getElementById('emailOk');
    var passwordOk = document.getElementById('passwordOk');
    var passwordRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
    var arrStr = [];
    var arrPassword = passwordRegex.join('')

    function passwordChars(password) {
        if (password.value.length >= 8) {
            return true;
        }
        return false;
    }
    
    function passwordFn (passwordRegex, str) {
        var enter= true 
        for (var i=0; i<str.length;  i++) {
            arrStr[i] = str[i];
            for (var j=0; j<passwordRegex.length; j++){
                if (!arrPassword.includes(arrStr[i])) {
                    enter = false
                }
            }
        }
        return enter;
    }
    email.onfocus = function() { // no puedo quitar el border red
        password.classList.remove('inputErr');
        password.classList.remove('inputApc');
        passwordOk.innerHTML = '';
    }
    email.onblur = function () {
        if (!email.value.match(emailRegex)) {
            email.classList.add('inputErr');
            email.classList.remove('inputApc');
            emailOk.innerHTML = 'Please enter a valid email';
            emailOk.classList.add('spanNot');
            emailOk.classList.remove('spanOk');            
        } else {
            email.classList.remove('inputErr');
            email.classList.add('inputApc');
            emailOk.innerHTML = 'Valid email';
            emailOk.classList.add('spanOk');
            emailOk.classList.remove('spanNot');
        }
    }
    password.onfocus = function() {
        password.classList.remove('inputErr');
        password.classList.remove('inputApc');
        passwordOk.innerHTML = '';
    }
    password.onblur = function () {
        if (passwordFn(passwordRegex,password.value) && passwordChars(password)) {
            password.classList.remove('inputErr');
            password.classList.add('inputApc');
            passwordOk.innerHTML = 'Valid password';
            passwordOk.classList.add('spanOk');
            passwordOk.classList.remove('spanNot');
        } else {
            password.classList.add('inputErr');
            password.classList.remove('inputApc');
            passwordOk.innerHTML = 'Please enter a valid password';
            passwordOk.classList.add('spanNot');
            passwordOk.classList.remove('spanOk');
        }
    }
    loginBtn.onclick = function(e) {
        e.preventDefault();   
        console.log(email.value,password.value,passwordRegex.length);
    }
}