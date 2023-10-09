const socket = io();

const circle = document.querySelector("#circle");


const drag = e => {
    const clientX = e.clientX;
    const clientY = e.clientY;


    socket.emit("circle position", {
        top: clientY+"px",
        left: clientX+"px",
    });
    // circle.style.top = clientY + "px";
    // circle.style.left = clientX + "px";

}

document.addEventListener("mousedown", e => {
    document.addEventListener("mousemove", drag)
});

document.addEventListener("mouseup", e => {
    document.removeEventListener("mousemove", drag)
})

socket.on("move circle", position => {

    circle.style.top = position.top;
    circle.style.left = position.left;
})