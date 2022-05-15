// //getting the canvas from html
// const canvas = document.getElementById('canv');
// //sizing the canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const ctx = canvas.getContext('2d');
// let cols = Math.floor(window.innerWidth / 20) + 1;
// let ypos = Array(cols).fill(0);

// ctx.fillStyle = '#000'; //canvas background color
// ctx.fillRect(0, 0, canvas.width, canvas.height); //I commented this line out and nothing changed

// function matrix () {
//     const w = window.innerWidth;
//     const h = window.innerHeight;

//     if (canvas.width !== w) {
//         canvas.width = w;
//         cols = Math.floor(window.innerWidth / 20) + 1;
//         ypos = Array(cols).fill(0);
//     }
//     if (canvas.height !== h) {
//         canvas.height = h;
//     }

//     ctx.fillStyle = '#0001';
//     ctx.fillRect(0, 0, w, h);

//     ctx.fillStyle = '#949494';
//     ctx.font = '15pt monospace';

//     ypos.forEach((y, ind) => {
//         const text = String.fromCharCode(Math.random() * 10);
//         const x = ind * 20;
//         ctx.fillText(text, x, y);
//         if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
//         else ypos[ind] = y + 20;
//     });
// }

// setInterval(matrix, 50);

//had a matrix effect with falling characters on the landing div but it was overkill so removed^ saving the code for later just to play around

//setting up carousel
const slider = document.querySelectorAll(".read-more"),
  blackRightArrow = document.querySelectorAll(".black-arrow-right"),
  blackLeftArrow = document.querySelectorAll(".black-arrow-left"),
  whiteRightArrow = document.querySelectorAll(".white-arrow-right"),
  whiteLeftArrow = document.querySelectorAll(".white-arrow-left");
readMoreBox = document.querySelectorAll(".read-more");

blackRightArrow.forEach((arrow, index, arr) => {
  readMoreBox[1].style.backgroundColor = `white`;
  readMoreBox[3].style.backgroundColor = `white`;
  arrow.addEventListener("click", () => {
    console.log("heard");
    for (let i = 0; i < slider.length; i++) {
      if (i == 0) {
        slider[1].style.transform = `translate(${-100}%)`;
      }
      if (i == 1) {
        slider[3].style.transform = `translate(${-100}%)`;
      }
    }
  });
});
blackLeftArrow.forEach((arrow, index, arr) => {
    arrow.addEventListener("click", () => {
      console.log("heard");
      for (let i = 0; i < slider.length; i++) {
        if (i == 0) {
          slider[1].style.transform = `translate(${100}%)`;
        }
        if (i == 1) {
          slider[3].style.transform = `translate(${100}%)`;
        }
      }
    });
  });


  whiteRightArrow.forEach((arrow, index, arr) => {
    readMoreBox[0].style.backgroundColor = `black`;
    readMoreBox[2].style.backgroundColor = `black`;
    arrow.addEventListener("click", () => {
      console.log("heard");
      for (let i = 0; i < slider.length; i++) {
        if (i == 0) {
          slider[0].style.transform = `translate(${-100}%)`;
        }
        if (i == 1) {
          slider[2].style.transform = `translate(${-100}%)`;
        }
      }
    });
  });
  whiteLeftArrow.forEach((arrow, index, arr) => {
      arrow.addEventListener("click", () => {
        console.log("heard");
        for (let i = 0; i < slider.length; i++) {
          if (i == 0) {
            slider[0].style.transform = `translate(${100}%)`;
          }
          if (i == 1) {
            slider[2].style.transform = `translate(${100}%)`;
          }
        }
      });
    });

    //code doesnt follow DRY principle at all, I need to deepen my understanding of SCSSS to cut down on some of the repetive variable decleraton