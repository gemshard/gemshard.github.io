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
    for (var i=0;i<4;i++) {
        packs[i].style.marginTop = "0px";
        
        if (i>0) {
            packs[i].style.marginLeft = "50px";   
        };             
    };
},10);

// direction packs
packs[0].onclick = function() {
    window.location.href = 'bronze/index.html';
};
packs[1].onclick = function() {
    window.location.href = 'silver/index.html';
};
packs[2].onclick = function() {
    window.location.href = 'gold/index.html';
};
packs[3].onclick = function() {
    window.location.href = 'platinum/index.html';
};