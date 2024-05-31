let userData = location.href.split('?').pop().split('&');
document.getElementById('welcome').innerText = 'Welcome ' + userData[0].split('=').pop().charAt(0).toUpperCase() + userData[0].split('=').pop().substring(1).replace('+', " ");
let divTag = document.getElementsByTagName('div');
for (let i = 0; i < userData.length; i++) {
    divTag[0].innerHTML += '<p>' + userData[i].replace('%40', '@').replace('=', ': ').replace('+', " ") + '</p>'
}


let userAgent = navigator.userAgent
const isChrome = /Chrome/.test(userAgent) && !/Edg/.test(userAgent) && !/OPR/.test(userAgent);
const isEdge = /Edg/.test(userAgent);
const isOpr = /Opr/.test(userAgent)
const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Edg/.test(userAgent)

if (isChrome) {
    // alert('You are using Chrome, the best web browser!');
} else if (isEdge) {
    alert("You're using Edge. For a better experience, consider using Chrome!")
}
else if (isOpr) {
    console.log("You're using Opera. For a better experience, consider using Chrome!");
}
else if (isSafari) {
    console.log("You're using Safari. For a better experience, consider using Chrome!");
}
else {
    console.log("Consider using Chrome for better experience!");
}