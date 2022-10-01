window.onload = function () {
    var loginBtn = document.getElementsByClassName('loginBtn')[0];
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailOk = document.getElementById('emailOk');
    var passwordOk = document.getElementById('passwordOk');
    var passwordRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
    var accessEmail = false;
    var accessPass = false;

    function passwordChars(password) {
        if (password.value.length >= 8) {
            return true;
        }
        return false;
    }
    function passwordFn (passwordRegex, str) {
        var enter= true 
        for (var i=0; i<str.length;  i++) {
            for (var j=0; j<passwordRegex.length; j++){
                if (!passwordRegex.join('').includes(str[i])) {
                    enter = false;
                }
            }
        }
        return enter;
    }
    function addClass(tagName, tagNameOk) {
        tagName.classList.remove('inputErr');
        tagName.classList.add('inputApc');
        tagNameOk.innerHTML = 'Valid ' + tagName.name;
        tagNameOk.classList.add('spanOk');
        tagNameOk.classList.remove('spanNot');
    }
    function removeClass(tagName,tagNameOk) {
        tagName.classList.add('inputErr');
        tagName.classList.remove('inputApc');
        tagNameOk.innerHTML = 'Please enter a valid ' + tagName.name;
        tagNameOk.classList.add('spanNot');
        tagNameOk.classList.remove('spanOk');
    }
    function focusing(tagName, tagNameOk) {
        tagName.classList.remove('inputErr');
        tagName.classList.remove('inputApc');
        tagNameOk.innerHTML = '';
    }
    email.onfocus = function() {1   
       focusing(email,emailOk);
    }
    email.onblur = function () {
        if (!email.value.match(emailRegex)) {
            removeClass(email,emailOk);
            accessEmail = false;         
        } else {
            addClass(email,emailOk);
            accessEmail = true;
        }
    }
    password.onfocus = function() {
        focusing(password,passwordOk);
        password.type = 'text';
    }
    password.onblur = function () {
        password.type = 'password';
        if (passwordFn(passwordRegex,password.value) && passwordChars(password)) {
            addClass(password,passwordOk);
            accessPass = true;
        } else {
            removeClass(password,passwordOk);
            accessPass = false;
        }
    }
    loginBtn.onclick = function(e) {
        e.preventDefault();
        if (accessEmail && accessPass) {
            customFetch(email.value,password.value);
        } else if (!accessEmail && !accessPass){
            alert('Complete email and password');
        } else if (!accessEmail) {
            alert('Complete email');
        } else if (!accessPass) {
            alert('Complete Password');
        } else {
            alert('Complete form');
        }
    }
    
    function customFetch(email,password) {
        var userOk = {
            email:'rose@radiumrocket.com',
            password:'BaSP2022'
        }
        if (userOk.email===email && userOk.password===password) {
            userOkConcat = '?email='+userOk.email+'&password='+userOk.password;
        } else {
            userOkConcat = '';
        }

        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login'+userOkConcat)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                if (data.success) {
                    alert('Employee logged\nEmail: '+userOk.email +'\nPassword: ' + userOk.password);
                    console.log(data);
                } else {
                    alert('Unregistered employee\n'+ data.errors[0].msg + ' or is not registered');
                    console.log(data);
                }
            })
            .catch(function (err) {
                console.error(err);
            })   

    }        
}
