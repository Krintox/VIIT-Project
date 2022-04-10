
function popupRemove() {
    document.getElementById('pop-up-box').style.display = "none";
    document.getElementById('main-layout').style.opacity = "1";  
}

function popupDisp() {
    document.getElementById('pop-up-box').style.display = "block";
    document.getElementById('main-layout').style.opacity = "0.5";
    document.getElementById('pop-up-box').style.opacity = "1";
}

function profileCardDisp() {
    document.getElementById('profile-card').style.display = "block";
}

function profileCardRemove() {
    document.getElementById('profile-card').style.display = "none";
}