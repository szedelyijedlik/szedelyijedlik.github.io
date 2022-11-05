function openMenu(){
    var menu = document.querySelector(".hamburger")
    menu.style.right = 0
}

function closeMenu(){
    var menu = document.querySelector(".hamburger")
    menu.style.right = "-70%"
}

function mute(){
    var video = document.querySelector("video")
    if (video.muted === false) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}