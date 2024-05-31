//! Problem 3.1
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

// function stopAnimation(){
//     clearInterval(myInterval)
// }

//! Problem 3.3

let imgSrc = [
    '../images/memory Game/1.gif',
    '../images/memory Game/2.gif',
    '../images/memory Game/3.gif',
    '../images/memory Game/4.gif',
    '../images/memory Game/5.gif',
    '../images/memory Game/6.gif',
    '../images/memory Game/1.gif',
    '../images/memory Game/2.gif',
    '../images/memory Game/3.gif',
    '../images/memory Game/4.gif',
    '../images/memory Game/5.gif',
    '../images/memory Game/6.gif',
]

let docImg = document.getElementsByTagName('img')
let i = 0
let firstPick = null;
let secondPick = null;
let matchedElements = []
let shuffledImages = Array.from(imgSrc).sort(() => Math.random() > 0.5 ? 1 : -1)
let userScore = 0

function changeSrc(target, index) {
    target.src = shuffledImages[index]
    if (firstPick == null) {
        firstPick = target.src
        matchedElements.push(target)
    }
    else {
        secondPick = target.src
        matchedElements.push(target)
        if (firstPick == secondPick) {
            console.log(firstPick);
            console.log(secondPick);
            firstPick = null
            secondPick = null
            matchedElements = []
            userScore++
            if (userScore == 6) {
                let amr = alert('Congratulations')
                console.log(amr);
            }
        } else {
            setTimeout(function () {
                firstPick = null
                secondPick = null
                for (let i = 0; i < matchedElements.length; i++) {
                    matchedElements[i].src = '../images/memory Game/Moon.gif'
                }
                matchedElements = []
            }, 1000)
        }
    }

}