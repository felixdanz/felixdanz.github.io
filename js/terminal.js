dragElement(document.getElementById("terminal"));

function dragElement(elmnt) {
    var mouseX = 0, mouseY = 0;
    var newMouseX = 0, newMouseY = 0;

    if (document.getElementById(elmnt.id + "-header")) {
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        mouseX = e.clientX;
        mouseY = e.clientY;

        document.onmouseup = closeDragElement;
        
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        newMouseX = mouseX - e.clientX;
        newMouseY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - newMouseY) + "px";
        elmnt.style.left = (elmnt.offsetLeft - newMouseX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}