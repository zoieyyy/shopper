


function toggle(displayId, toggleId, showmsg, hidemsg) {
    var ele = document.getElementById(toggleId);
    var text = document.getElementById(displayId);
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = showmsg;
    }
    else {
        ele.style.display = "block";

        text.innerHTML = hidemsg;
    }
}
