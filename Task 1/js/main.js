// ? Problem 1
let myWin
let distance = 200
let myInterval
function openWindow() {
    myWin = window.open('child.html', '_blank', 'width=200,height=200')
    myInterval = setInterval(function () {
        myWin.focus()
        myWin.moveBy(distance, 0)
        if ((myWin.screenX + 220) >= window.screen.width) {
            distance = -200
        }
        else if (myWin.screenX == 0) {
            distance = 200
        }
    }, 500)
}

function stopWindow() {
    clearInterval(myInterval)
    myWin.focus()
}

//? Problem 2
// var childWin
// function openWindow() {
//     childWin = window.open("child.html", '_blank', 'width=300,height=200,scrollbars=yes,status=yes');
//     childWin.focus()

//     let end = setInterval(function () {
//         childWin.scrollBy(0, 50)
//         console.log(childWin.scrollY + childWin.innerHeight);
//         console.log(childWin.document.body.scrollHeight);
//         if (childWin.scrollY + childWin.innerHeight >= childWin.document.body.scrollHeight) {
//             clearInterval(end)
//             setTimeout(function () {
//                 childWin.close()
//             }, 2000)
//         }
//     }, 1000)

//     setTimeout(typing, 1000)
// }

// function typing() {
//     let myWord = 'Typing Message'.split("")
//     let i = 0
//     let myEl = childWin.document.getElementById('myTag')
//     let flag = setInterval(function () {

//         if (i < myWord.length) {
//             myEl.textContent += myWord[i]
//             i++
//         }
//         else {
//             clearInterval(flag)
//             setTimeout(function () {
//                 childWin.close()
//             }, 2000)
//         }
//     }, 500)
// }