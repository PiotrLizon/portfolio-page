document.addEventListener('DOMContentLoaded', function () {
  const scroller = new Scroller('#root');

  document.addEventListener('wheel', (event) => scroller.listenScroll(event));
  document.addEventListener('swipeUp', () => scroller.scroll(1));
  document.addEventListener('swipeDown', () => scroller.scroll(-1));
  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 40:
        return scroller.scroll(1)
      case 38:
        return scroller.scroll(-1)

      default:
        return;
    }
  })


  const paragraph = document.querySelector(".textHeader");

  const txt = `Cześć! Nazywam się Piotrek. Szukam pracy na stanowisku junior software tester.`;

  let indexText = 0;

  const addLetter = () => {
    paragraph.textContent += txt[indexText];
    indexText++;

    if (indexText === txt.length) clearInterval(indexTyping);
  }
  const indexTyping = setInterval(addLetter, 150);


  document.addEventListener("DOMContentLoaded", function () {
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

})