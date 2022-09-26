window.onload = function () {
    var name = document.getElementById('name');
    var nameOk = document.getElementById('nameOk');
    var lastName = document.getElementById('lastName');
    var lastNameOk = document.getElementById('lastNameOk');
    var dni = document.getElementById('dni');
    var dniOk = document.getElementById('dniOk');
    var phone = document.getElementById('phone');
    var phoneOk = document.getElementById('phoneOk');
    var address = document.getElementById('address');
    var addressOk = document.getElementById('addressOk');
    var location = document.getElementById('location');
    var locationOk = document.getElementById('locationOk');
    var zipCode = document.getElementById('zipCode');
    var zipCodeOk = document.getElementById('zipCodeOk');
    var email = document.getElementById('email');
    var emailOk = document.getElementById('emailOk');
    var repeatEmail = document.getElementById('repeatEmail');
    var repeatEmailOk = document.getElementById('repeatEmailOk');
    var password = document.getElementById('password');
    var passwordOk = document.getElementById('passwordOk');
    var repeatPassword = document.getElementById('repeatPassword');
    var repeatPasswordOk = document.getElementById('repeatPasswordOk');
    var numberRegex = [0,1,2,3,4,5,6,7,8,9];
    var letterRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var signUpBtn = document.getElementsByClassName('signUpBtn')[0];

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
    function wordMinChars(word, n) {
        if (word.value.length >= n) {
            return true;
        }
        return false;
    }
    function wordMaxChars(word, n) {
        if (word.value.length <= n) {
            return true;
        }
        return false;
    }
    function validateFields(regex, tagName, tagNameOk, n) {
        if(contentLetters(regex, tagName.value) && wordMinChars(tagName, n)) {
            addClass(tagName, tagNameOk);
        } else {
            removeClass(tagName, tagNameOk);
        }
    }
    //NAME
    name.onfocus = function() {
        focusing(name, nameOk);
    }
    name.onblur = function() {
        validateFields(letterRegex, name, nameOk, 3);
    }
    //LAST NAME
    lastName.onfocus = function() {
        focusing(lastName, lastNameOk);
    }
    lastName.onblur = function() {
        validateFields(letterRegex, lastName, lastNameOk, 3);
    }
    //DNI
    dni.onfocus = function() {
        focusing(dni, dniOk);
    }
    dni.onblur = function() {
        validateFields(numberRegex, dni, dniOk, 7);
    }
    //PHONE
    phone.onfocus = function() {
        focusing(phone, phoneOk);
    }
    phone.onblur = function() {
        validateFields(numberRegex, phone, phoneOk, 10);
    }
    //ADDRESS

    //LOCATION

    //ZIP CODE
    zipCode.onfocus = function() {
        focusing(zipCode, zipCodeOk);
    }
    zipCode.onblur = function() {
        if(contentLetters(numberRegex, zipCode.value) && wordMinChars(zipCode, 4) && wordMaxChars(zipCode, 5)) {
            addClass(zipCode, zipCodeOk);
        } else {
            removeClass(zipCode, zipCodeOk);
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
    //REPEAT EMAIL 
    repeatEmail.onfocus = function() {
        focusing(repeatEmail, repeatEmailOk);
    }
    repeatEmail.onblur = function () {
        if (!repeatEmail.value.match(emailRegex)) {
            removeClass(repeatEmail, repeatEmailOk);          
        } else {
            addClass(repeatEmail, repeatEmailOk); 
        }
    }
    //PASSWORD - must contain numbers and letters
    password.onfocus = function() {
        focusing(password, passwordOk);
    }
    password.onblur = function () {
        validateFields(letterRegex.concat(numberRegex),password, passwordOk, 8);
    }
    //REPEAT PASSWORD
    repeatPassword.onfocus = function() {
        focusing(repeatPassword, repeatPasswordOk);
    }
    repeatPassword.onblur = function () {
        validateFields(letterRegex.concat(numberRegex),repeatPassword, repeatPasswordOk, 8);
    }
    //BTN
    signUpBtn.onclick = function(e) {
        e.preventDefault();
        console.log(name.value, lastName.value, dni.value, phone.value, address.value, location.value, zipCode.value, email.value, repeatEmail.value, password.value, repeatPassword.value)
    }
}