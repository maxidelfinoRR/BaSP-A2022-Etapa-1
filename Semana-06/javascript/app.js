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
}