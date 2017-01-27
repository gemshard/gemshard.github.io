var loginBtn = document.getElementsByClassName('header__login')[0];
var loginBox = document.getElementsByClassName('login_box')[0];
var packsWrapper = document.getElementsByClassName('packs_wrapper')[0];
var packs = document.getElementsByClassName('packs_box');



setTimeout(function(){document.body.style.opacity = "1";},10);


loginBtn.onclick = function() {
    loginBox.style.display = "block";
};

//test
setTimeout(function(){
    packs[0].style.marginTop = "0px";
},10);

