// ! Problem 3.1
// let imgSrc = ['../images/SlideShow/1.jpg', '../images/SlideShow/2.jpg', '../images/SlideShow/3.jpg', '../images/SlideShow/4.jpg', '../images/SlideShow/5.jpg', '../images/SlideShow/6.jpg']
// let i = 0
// let slideShowInterval;


// function next() {
//     if (i < imgSrc.length - 1) {
//         i++
//         document.getElementById('mainImg').src = imgSrc[i]
//     }
// }

// function previous() {
//     if (i > 0) {
//         i--
//         document.getElementById('mainImg').src = imgSrc[i]
//     }
// }

// function slideShow() {
//     slideShowInterval = setInterval(function () {
//         if (i < imgSrc.length - 1) {
//             i++
//             document.getElementById('mainImg').src = imgSrc[i]
//         }
//         else if (i == imgSrc.length - 1) {
//             i = 0
//             document.getElementById('mainImg').src = imgSrc[i]
//         }
//     }, 1000)
// }

// function stop() {
//     clearInterval(slideShowInterval)
// }

//! Problem 3.2
// let imgSrc = document.getElementsByTagName('img')
// let i = 0
// let myInterval

// function startAnimation() {
//     myInterval = setInterval(function () {
//         i++
//         imgSrc[i].src = '../images/marbels/marble3.jpg'
//         if (i - 1 < 0) {
//             imgSrc[imgSrc.length - 1].src = '../images/marbels/marble1.jpg'
//         }
//         else {
//             imgSrc[i - 1].src = '../images/marbels/marble1.jpg'
//         }
//         if (i == imgSrc.length - 1) {
//             i = -1
//         }
//     }, 1000)
// }

// function stopAnimation() {
//     clearInterval(myInterval)
// }