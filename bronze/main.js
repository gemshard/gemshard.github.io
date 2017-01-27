var loginBtn = document.getElementsByClassName('header__login')[0];
var loginBox = document.getElementsByClassName('login_box')[0];
var packsWrapper = document.getElementsByClassName('packs_wrapper')[0];
var packs = document.getElementsByClassName('packs_box');
var hrefAll = document.getElementsByClassName('set__href_all')[0];
var plate = document.getElementsByClassName('bronze__plate')[0];

setTimeout(function(){document.body.style.opacity = "1"; hrefAll.style.opacity = "1";},10);
hrefAll.onclick = function() {
    window.location.href = '../index.html'
};
loginBtn.onclick = function() {
    loginBox.style.display = "block";
};

setTimeout(function(){
    packs[0].style.marginTop = "0px";
},10)

function randint(min, max) {
    return min + Math.round(Math.random()*(max-min));
};

/*setInterval(function(){
    color1 = randint(1,255).toString('16') + randint(1,255).toString('16') + randint(1,255).toString('16');
    color2 = randint(1,255).toString('16') + randint(1,255).toString('16') + randint(1,255).toString('16');
    packs[0].style.background = "linear-gradient(to top, #"+color1+", #"+color2+")";
},1000);*/

plate.onclick = function() {
    plate.style.top = "-600px";
    plate.style.opacity = "0";
    plate.style.display = "0";
    packs[0].style.boxShadow = "none";
    setTimeout(function() {
        packs[0].children[1].style.opacity = "0";
        packs[0].children[2].style.opacity = "0";
        packs[0].children[1].style.marginLeft = "-400px";
        packs[0].children[2].style.left = "551px";
    },2000);
};