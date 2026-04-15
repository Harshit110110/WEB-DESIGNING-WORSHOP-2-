let originalText = "Welcome to JavaScript Lab";
let fontSize = 24;
let isVisible = true;

function changeHeading() {
    let input = document.getElementById("inputText").value;
    if (input !== "") {
        document.getElementById("heading").innerText = input;
    }
}

function changeBackground() {
    let colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
}

function resetPage() {
    document.getElementById("heading").innerText = originalText;
    document.body.style.backgroundColor = "#e6e6e6";
    document.getElementById("heading").style.fontSize = "24px";
    document.getElementById("para").style.display = "block";
    fontSize = 24;
    isVisible = true;
}