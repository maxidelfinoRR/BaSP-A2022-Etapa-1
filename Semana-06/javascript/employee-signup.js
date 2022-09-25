window.onload = function () {
    var name = document.getElementById('name');
    var nameOk = document.getElementById('nameOk');
    var lastName = document.getElementById('lastName');
    var lastNameOk = document.getElementById('lastNameOk');
    var dni = document.getElementById('dni');
    var dniOk = document.getElementById('dniOk');
    var numberRegex = [0,1,2,3,4,5,6,7,8,9];
    var letterRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var signUpBtn = document.getElementsByClassName('signUpBtn')[0];
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailOk = document.getElementById('emailOk');
    var passwordOk = document.getElementById('passwordOk');
    var passwordRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];

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
    function contentLetters (regex, str) {
        var enter= true 
        for (var i=0; i<str.length;  i++) {
            for (var j=0; j<regex.length; j++){
                if (!regex.join('').includes(str[i])) {
                    enter = false
                }
            }
        }
        return enter;
    }
    function wordChars(word, n) {
        if (word.value.length >= n) {
            return true;
        }
        return false;
    }

    //NAME
    name.onfocus = function() {
        focusing(name, nameOk);
    }
    name.onblur = function() {
        if(contentLetters(letterRegex, name.value) && wordChars(name, 3)) {
            addClass(name, nameOk);
        } else {
            removeClass(name, nameOk);
        }
    }
    //LAST NAME
    lastName.onfocus = function() {
        focusing(lastName, lastNameOk);
    }
    lastName.onblur = function() {
        if(contentLetters(letterRegex, lastName.value) && wordChars(lastName, 3)) {
            addClass(lastName, lastNameOk);
        } else {
            removeClass(lastName, lastNameOk);
        }
    }
    //DNI
    dni.onfocus = function() {
        focusing(dni, dniOk);
    }
    dni.onblur = function() {
        if(contentLetters(numberRegex, dni.value) && wordChars(dni, 7)) {
            addClass(dni, dniOk);
        } else {
            removeClass(dni, dniOk);
        }
    }
    //EMAIL
    email.onfocus = function() {
        focusing(email, emailOk);
    }
    email.onblur = function () {
        if (!email.value.match(emailRegex)) {
            removeClass(email, emailOk);          
        } else {
            addClass(email, emailOk); 
        }
    }
    //PASSWORD
    password.onfocus = function() {
        focusing(password, passwordOk);
    }
    password.onblur = function () {
        if (contentLetters(passwordRegex,password.value) && wordChars(password, 8)) {
            addClass(password, passwordOk);
        } else {
            removeClass(password, passwordOk);
        }
    }
    //BTN
    signUpBtn.onclick = function(e) {
        e.preventDefault();
    }
}