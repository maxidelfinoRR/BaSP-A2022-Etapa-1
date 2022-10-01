window.onload = function () { 
    // LOGIC SIDEBAR
    var burgerBtn = document.getElementById('burgerBtn');
    var sidebar = document.getElementsByTagName('aside')[0];
    var activeBurgerBtn = true;
    burgerBtn.onclick = function () {
        if (activeBurgerBtn) {
            sidebar.classList.add('active'); // corregir que cuando llegue a 1512px no desaparezca
        } else {
            sidebar.classList.remove('active');
        }
        activeBurgerBtn = !activeBurgerBtn;
    }

    var name = document.getElementById('name'); // Nombre: Requerido, solo letras y debe tener más de 3 letras.
    var nameOk = document.getElementById('nameOk');
    var email = document.getElementById('email'); // Email: Requerido y debe tener un formato de email válido.
    var emailOk = document.getElementById('emailOk');
    var select = document.getElementById('select');
    var selectOk = document.getElementById('selectOk');
    var textArea = document.getElementById('textArea'); // Mensaje: Requerido, texto alfanumérico con al menos 3 caracteres. 
    var textAreaOk = document.getElementById('textAreaOk');
    var numberRegex = [0,1,2,3,4,5,6,7,8,9];
    var letterRegex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var regex = [' '];
    var regexAll = letterRegex.concat(numberRegex);
    var passed =  [false,false,false,false];
    var contactBtn = document.getElementById('contactBtn');

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
    function validateFields(regex, tagName, tagNameOk, n, pos) {
        if(contentLetters(regex, tagName.value) && wordMinChars(tagName, n) ) {
            addClass(tagName, tagNameOk);
            passed[pos] = true;
        } else {
            removeClass(tagName, tagNameOk);
            passed[pos] = false;
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
        } else {
            removeClass(tagName, tagNameOk);
            passed[pos] = false;
        }
    }
    //NAME
    name.onfocus = function() {
        focusing(name, nameOk);
    }
    name.onblur = function() {
        validateFields(letterRegex, name, nameOk, 3, 0);
    }
    // EMAIL
    email.onfocus = function() {
        focusing(email, emailOk);
    }
    email.onblur = function () {
        if (!email.value.match(emailRegex)) {
            removeClass(email, emailOk);
            passed[1] = false;
        } else {
            addClass(email, emailOk);
            passed[1] = true;
        }
    }
    //OPTION 
    select.onblur = function (){
        if (select.value !== '-Category-') {
            addClass(select, selectOk);
            passed[2] = true;
        } else {
            removeClass(select, selectOk);
            passed[2] = false;
        }
    }
    //TEXTAREA
    textArea.onfocus = function() {
        focusing(textArea, textAreaOk);
    }
    textArea.onblur = function() {
        withSpace(regexAll.concat(regex),textArea, textAreaOk, 5, 3);
    }
    //BTN
    contactBtn.onclick = function(e) {
        e.preventDefault();
        var cont = 0;
        for (let i = 0; i < passed.length; i++) {
            if (passed[i]) {
                cont = cont + 1;
            }
        }
        if (cont == passed.length) {
            alert('Name: ' + name.value + '\n' + 'Email: ' + email.value + '\n' + 'Category: ' + select.value + '\n' + 'Message: ' + textArea.value);
        } else {
            alert('form incomplete');
        }
    }
}