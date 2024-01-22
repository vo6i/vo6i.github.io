const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el)=> {
    let speedx = el.dataset.speesx;
    let speedy = el.dataset.speesy;
    let speedz = el.dataset.speesz;
    let rotateSpeed = el.dataset.rotation; 

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(1500px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateX(calc(-50% + ${yValue * speedy}px))`;
  });
}

update(0);
 
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});
