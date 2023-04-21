var hire = document.querySelector('#otherbox');
var hiringradio = document.querySelector('#othervalue');
hire.style.display = "none";

function addTextArea() {

if (hiringradio.checked) {
    hire.style.display = "block";
}
else {
    hire.style.display = "none";
}
}