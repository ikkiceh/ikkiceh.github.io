function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancyText() {
    let textArea = document.getElementById("textInput");
    let fancy = document.getElementById("fancy").checked;

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    // split sentences by period
    let sentences = text.split(".");

    // add "-Moo" to last word of each sentence
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    // trim entire sentences to remove extra spaces
    for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].trim();
        }

    // join sentences back
    textArea.value = sentences.join(". ");
}