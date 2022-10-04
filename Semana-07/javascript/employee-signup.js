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
        tagNameOk.classList.add('spanOk');
        tagNameOk.classList.remove('spanNot');
    }
    function removeClass(tagName,tagNameOk) {
        tagName.classList.add('inputErr');
        tagName.classList.remove('inputApc');
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
                    addClass(tagName, tagNameOk);
                    repeatPasswordOk.innerHTML = 'The password match'; 
                    passed[pos] = true;
                } else {
                    removeClass(tagName, tagNameOk);
                    repeatPasswordOk.innerHTML = 'Password don`t match'; 
                    passed[pos] = false;
                }
            } else {
                removeClass(tagName, tagNameOk);
            }
        } else {
            if(contentLetters(regex, tagName.value) && wordMinChars(tagName, n) ) {
                tagNameOk.innerHTML = 'Valid ' + tagName.name;
                addClass(tagName, tagNameOk);
                passed[pos] = true;
            } else if (!wordMinChars(tagName, n)) {
                tagNameOk.innerHTML = 'Must have at least '+ n +' characters';
                removeClass(tagName, tagNameOk);
                passed[pos] = false;
            } else if (!contentLetters(regex, tagName.value)) {
                if (tagName.name == 'name' || tagName.name == 'last name') {
                    tagNameOk.innerHTML = 'Must contain only letters';
                    removeClass(tagName, tagNameOk);
                    passed[pos] = false;
                } else if (tagName.name == 'dni' || tagName.name == 'phone'){
                    tagNameOk.innerHTML = 'Must contain only numbers';
                    removeClass(tagName, tagNameOk);
                    passed[pos] = false;
                } else if (tagName.name == 'password'){
                    tagNameOk.innerHTML = 'Must contain only letters and numbers';
                    removeClass(tagName, tagNameOk);
                    passed[pos] = false;
                }
            }
        }
    }
    function letterSpace(txt,tagNameOk){
        var arrayCharacters = txt.value.split('');
        var contSpace = 0
        for(var i=0; i<arrayCharacters.length; i++) {
            if (arrayCharacters[i] == " ") {
                    contSpace++;
                if (arrayCharacters[0] == " ") {
                    tagNameOk.innerHTML = 'Must only contain a spaces between letters';
                    return false;
                }
                if (arrayCharacters[i+1] == " "){
                    tagNameOk.innerHTML = 'Must only contain a spaces between letters';
                    return false;
                }
                if (arrayCharacters[arrayCharacters.length - 1] == " "){
                    tagNameOk.innerHTML = 'Must only contain a spaces between letters';
                    return false;
                }
            }
        }
        console.log(contSpace);
        if (contSpace > 1) {
            tagNameOk.innerHTML = 'Must only contain a spaces between letters';
            return false;
        } 
        if (txt.name == 'address' && contSpace === 1){
            return true;
        }
        if (txt.name !== 'address' && contSpace === 0){
            return true;
        }
        tagNameOk.innerHTML = 'Must only contain a spaces between letters';
        return false
    }
    function withSpace(regex, tagName, tagNameOk, n, pos) {
        if (contentLetters(regex, tagName.value) && wordMinChars(tagName, n) && letterSpace(tagName,tagNameOk)) {
            addClass(tagName, tagNameOk);
            tagNameOk.innerHTML = 'Valid ' + tagName.name;
            passed[pos] = true;
        } else if (tagName.value.length === 0) {
            tagNameOk.innerHTML = 'Field cannot be empty';
            removeClass(tagName, tagNameOk);
        }else if (!wordMinChars(tagName, n)) {
            tagNameOk.innerHTML = 'Must have at least '+ n +' characters';
            removeClass(tagName, tagNameOk);
            passed[pos] = false;
        } else if (!contentLetters(regex, tagName.value)) {
            tagNameOk.innerHTML = 'Must contain only letters, numbers and a space';
            removeClass(tagName, tagNameOk);
            passed[pos] = false; 
        } else {
            removeClass(tagName, tagNameOk);
            passed[pos] = false;
        }
    }
    function calculateAge(date) {
        var today = new Date();
        var birthday = new Date(date);
        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
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
        if(contentLetters(numberRegex, dni.value) && wordMinChars(dni, 7) && wordMaxChars(dni, 8)) {
            addClass(dni, dniOk);
            dniOk.innerHTML = 'Valid ' + dni.name;
            passed[2] = true;
        } else if (!wordMinChars(dni, 7) || !wordMaxChars(dni, 8)) {
            dniOk.innerHTML = 'Must only have between 7 and 8 numbers';
            removeClass(dni, dniOk);
            passed[2] = false;
        } else if (!contentLetters(regex, dni.value)) {
            dniOk.innerHTML = 'Must contain only numbers';
            removeClass(dni, dniOk);
            passed[2] = false;
        }else {
            removeClass(dni, dniOk);
            passed[2] = false;
        }
    }
    //DATE OF BIRTH
    dateBirth.onfocus = function() {
        focusing(dateBirth, dateBirthOk);
    }
    dateBirth.onblur = function() {     
        if (calculateAge(dateBirth.value)>17 && isNaN(Date.parse(dateBirth.value)) === false){
            addClass(dateBirth,dateBirthOk);
            newDate = dateBirth.value[5]+dateBirth.value[6]+'/'+dateBirth.value[8]+dateBirth.value[9]+'/'+dateBirth.value[0]+dateBirth.value[1]+dateBirth.value[2]+dateBirth.value[3];
            console.log(newDate);
            passed[3]=true;
        } else if (calculateAge(dateBirth.value)<18) {
            dateBirthOk.innerHTML = 'You must be of legal age';
            removeClass(dateBirth,dateBirthOk);
            passed[3]=false;
        }
        else {
            removeClass(dateBirth,dateBirthOk);
            dateBirthOk.innerHTML = 'Field cannot be empty';
            passed[3]=false;
        }
    }
    //PHONE
    phone.onfocus = function() {
        focusing(phone, phoneOk);
    }
    phone.onblur = function() {
        if(contentLetters(numberRegex, phone.value) && wordMinChars(phone, 10) && wordMaxChars(phone, 10)) {
            addClass(phone, phoneOk);
            phoneOk.innerHTML = 'Valid ' + phone.name;
            passed[4] = true;
        } else if (!wordMinChars(phone, 10) || !wordMaxChars(phone, 10)) {
            phoneOk.innerHTML = 'Must have only 10 numbers';
            removeClass(phone, phoneOk);
            passed[4] = false;
        } else if (!contentLetters(regex, phone.value)) {
            phoneOk.innerHTML = 'Must contain only numbers';
            removeClass(phone, phoneOk);
            passed[4] = false;
        }else {
            removeClass(phone, phoneOk);
            passed[4] = false;
        }
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
            zipCodeOk.innerHTML = 'Valid ' + zipCode.name;
            passed[7] = true;
        } else if (!wordMinChars(zipCode, 4) || !wordMaxChars(zipCode, 5)) {
            zipCodeOk.innerHTML = 'Must only have between 4 and 5 numbers';
            removeClass(zipCode, zipCodeOk);
            passed[7] = false;
        } else if (!contentLetters(regex, zipCode.value)) {
            zipCodeOk.innerHTML = 'Must contain only numbers';
            removeClass(zipCode, zipCodeOk);
            passed[7] = false;
        }else {
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
            emailOk.innerHTML = 'Please enter a valid email';
            removeClass(email, emailOk);
            passed[8] = false;
        } else {
            emailOk.innerHTML = 'Valid email';
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
        repeatEmailOk.innerHTML = 'Please enter a valid email'; 
            passed[9] = false;         
        } else {
            if (email.value === repeatEmail.value) {
                addClass(repeatEmail, repeatEmailOk);
                repeatEmailOk.innerHTML = 'The emails match'; 
                passed[9] = true;
            } else {
                removeClass(repeatEmail, repeatEmailOk);
                repeatEmailOk.innerHTML = 'Emails don`t match'; 
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
            customFetch()
        } else {
            alert('form incomplete');
        }
    }    
    function customFetch() {
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + name.value + '&lastName=' + lastName.value+ '&dni=' + dni.value+ '&dob=' + newDate + '&phone=' + phone.value+ '&address=' + address.value+ '&city=' + location.value+ '&zip=' + zipCode.value+ '&email=' + email.value+ '&password=' + password.value;
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                if (data.success) {
                    localStorage.setItem('name', name.value);
                    localStorage.setItem('lastName', lastName.value);
                    localStorage.setItem('dni', dni.value);
                    localStorage.setItem('dateBirth', newDate);
                    localStorage.setItem('phone', phone.value);
                    localStorage.setItem('address', address.value);
                    localStorage.setItem('location', location.value);
                    localStorage.setItem('zipCode', zipCode.value);
                    localStorage.setItem('email', email.value);
                    localStorage.setItem('password', password.value);
                    alert(data.msg + '\nName: ' + data.data.name + '\nLast Name: ' + data.data.lastName + '\nDNI ' + data.data.dni + '\nDate of Birth ' + data.data.dob + '\nPhone ' + data.data.phone+ '\nAddress ' + data.data.address + '\nLocation ' + data.data.city + '\nZip Code ' + data.data.zip + '\nEmail ' + data.data.email + '\nPassword ' + data.data.password);
                } else {
                    console.log('form incomplete');
                }
            })
            .catch(function (err) {
                console.error(err);
            })   
    }
}