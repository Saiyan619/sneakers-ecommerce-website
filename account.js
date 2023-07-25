
// js script for form

let logForm = document.getElementById('loginForm');
let regisForm = document.getElementById('regForm');
let indicate = document.getElementById('indicator');
let firstSwitch = document.getElementById('firstSwitch');
let secondSwitch = document.getElementById('secondSwitch');


secondSwitch.addEventListener('click',function () {
    regisForm.style.transform = 'translateX(0px)';
    logForm.style.transform = 'translateX(0px)';
    indicate.style.transform = "translateX(75px)";
})

firstSwitch.addEventListener('click',function () {
    regisForm.style.transform = 'translateX(300px)';
    logForm.style.transform = 'translateX(300px)';
    indicate.style.transform = "translateX(0px)";

})
