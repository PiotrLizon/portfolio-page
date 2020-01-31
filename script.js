document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth < 1280) return;

    const elements = document.querySelectorAll(".anim-div");
    const items = document.querySelectorAll(".anim-divv");

    document.addEventListener("mousemove", function (event) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(element => {
            const ratioX = -element.getAttribute("ratioX");
            const ratioY = -element.getAttribute("ratioY");

            const moveX = clientX - centerX;
            const moveY = clientY - centerY;

            element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
        })
        items.forEach(item => {
            const ratioX = item.getAttribute("ratioX");
            const ratioY = item.getAttribute("ratioY");

            const moveX = clientX - centerX;
            const moveY = clientY - centerY;

            item.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
        })
    })

})