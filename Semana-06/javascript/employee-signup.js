window.onload = function () {
    var name = document.getElementById('name');
    var nameOk = document.getElementById('nameOk');
    var lastName = document.getElementById('lastName');
    var lastNameOk = document.getElementById('lastNameOk');
    var dni = document.getElementById('dni');
    var dniOk = document.getElementById('dniOk');
    var dateBirth = document.getElementById('dateBirth');
    var dateBirthOk = document.getElementById('dateBirthOk');
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
    var regex = [' '];
    var regexAll = letterRegex.concat(numberRegex);
    var signUpBtn = document.getElementsByClassName('signUpBtn')[0];
    var passed =  [false,false,false,false,false,false,false,false,false,false,false,false];

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
    function validateFields(regex, tagName, tagNameOk, n, pos) {
        if (tagName.name === 'repeatPassword') {
            if(contentLetters(regex, tagName.value) && wordMinChars(tagName, n)) {
                if (password.value === repeatPassword.value) {
                    alert('Passwords match')
                    addClass(tagName, tagNameOk);
                    passed[pos] = true;
                } else {
                    alert('Passwords do not match')
                    removeClass(tagName, tagNameOk);
                    passed[pos] = false;
                }
            } else {
                removeClass(tagName, tagNameOk);
            }
        } else {
            if(contentLetters(regex, tagName.value) && wordMinChars(tagName, n) ) {
                addClass(tagName, tagNameOk);
                passed[pos] = true;
                console.log(passed);
            } else {
                removeClass(tagName, tagNameOk);
                passed[pos] = false;
                console.log(passed);
            }
        }
    }
    function letterSpace(txt){
        var arrayCharacters = txt.split('');
        for(var i=0; i<arrayCharacters.length; i++) {
            if (arrayCharacters[i] == " ") {
                if (arrayCharacters[0] == " ") {
                    return false;   
                }
            if (arrayCharacters[i+1] == " ")
            {
                return false;
            }
            if (arrayCharacters[arrayCharacters.length - 1] == " ")
            {
                return false;
            }
        }
        }
        return true;
    }
    function withSpace(regex, tagName, tagNameOk, n, pos) {
        if (contentLetters(regex, tagName.value) && wordMinChars(tagName, n) && letterSpace(tagName.value)) {
            addClass(tagName, tagNameOk);
            passed[pos] = true;
            console.log(passed);
        } else {
            removeClass(tagName, tagNameOk);
            passed[pos] = false;
            console.log(passed);
        }
    }
    //NAME
    name.onfocus = function() {
        focusing(name, nameOk);
    }
    name.onblur = function() {
        validateFields(letterRegex, name, nameOk, 3, 0);
    }
    //LAST NAME
    lastName.onfocus = function() {
        focusing(lastName, lastNameOk);
    }
    lastName.onblur = function() {
        validateFields(letterRegex, lastName, lastNameOk, 3, 1);
    }
    //DNI
    dni.onfocus = function() {
        focusing(dni, dniOk);
    }
    dni.onblur = function() {
        validateFields(numberRegex, dni, dniOk, 7, 2);
    }
    //DATE OF BIRTH
    dateBirth.onfocus = function() {
        focusing(dateBirth, dateBirthOk);
    }
    dateBirth.onblur = function() {
        if (isNaN(Date.parse(dateBirth.value)) === false) {
            addClass(dateBirth,dateBirthOk);
            passed[3]=true;
        } else {
            removeClass(dateBirth,dateBirthOk);
            passed[3]=false;
        }
    }
    //PHONE
    phone.onfocus = function() {
        focusing(phone, phoneOk);
    }
    phone.onblur = function() {
        validateFields(numberRegex, phone, phoneOk, 10, 4);
    }
    //ADDRESS
    address.onfocus = function() {
        focusing(address, addressOk);
    }
    address.onblur = function() {
        withSpace(regexAll.concat(regex),address, addressOk, 5, 5);
    }
    //LOCATION
    location.onfocus = function() {
        focusing(location, locationOk);
    }
    location.onblur = function() {   
        withSpace(regexAll.concat(regex),location, locationOk, 3, 6);
    }
    //ZIP CODE
    zipCode.onfocus = function() {
        focusing(zipCode, zipCodeOk);
    }
    zipCode.onblur = function() {
        if(contentLetters(numberRegex, zipCode.value) && wordMinChars(zipCode, 4) && wordMaxChars(zipCode, 5)) {
            addClass(zipCode, zipCodeOk);
            passed[7] = true;
        } else {
            removeClass(zipCode, zipCodeOk);
            passed[7] = false;
        }
    }
    //EMAIL
    email.onfocus = function() {
        focusing(email, emailOk);
    }
    email.onblur = function () {
        if (!email.value.match(emailRegex)) {
            removeClass(email, emailOk);
            passed[8] = false;
        } else {
            addClass(email, emailOk);
            passed[8] = true;
        }
    }
    //REPEAT EMAIL 
    repeatEmail.onfocus = function() {
        focusing(repeatEmail, repeatEmailOk);
    }
    repeatEmail.onblur = function () {
        if (!repeatEmail.value.match(emailRegex)) {
            removeClass(repeatEmail, repeatEmailOk); 
            passed[9] = false;         
        } else {
            if (email.value === repeatEmail.value) {
                alert('The emails match')
                addClass(repeatEmail, repeatEmailOk);
                passed[9] = true;
            } else {
                alert('The emails do match match')
                removeClass(repeatEmail, repeatEmailOk);
                passed[9] = false;
            }
        }
    }
    //PASSWORD - must contain numbers and letters
    password.onfocus = function() {
        focusing(password, passwordOk);
    }
    password.onblur = function () {
        validateFields(letterRegex.concat(numberRegex),password, passwordOk, 8, 10);
    }
    //REPEAT PASSWORD
    repeatPassword.onfocus = function() {
        focusing(repeatPassword, repeatPasswordOk);
    }
    repeatPassword.onblur = function () {
        validateFields(letterRegex.concat(numberRegex),repeatPassword, repeatPasswordOk, 8, 11);
    }
    //BTN
    signUpBtn.onclick = function(e) {
        e.preventDefault();
        var cont = 0;
        for (let i = 0; i < passed.length; i++) {
            if (passed[i]) {
                cont = cont + 1;
            }
        }
        if (cont == passed.length) {
            alert('Name: ' + name.value + '\n' + 'Last name: ' + lastName.value + '\n' + 'DNI: ' + dni.value + '\n' + 'Date of birth: ' + dateBirth.value + '\n' + 'Phone: ' + phone.value + '\n' + 'Address: ' + address.value + '\n' + 'Location: ' + location.value + '\n' + 'Zip code: ' + zipCode.value + '\n' + 'Email: ' + email.value + '\n' + 'Password: ' + password.value);
        } else {
            alert('form incomplete');
        }
    }
}