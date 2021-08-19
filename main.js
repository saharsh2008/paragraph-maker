inputs1 = [];
inputs2 = [];

function getParagraph1() {
    for (i = 1; i <= 6; i++) {
        inputs1.push(document.getElementById("input"+ i +"_para1").value);
        document.getElementById("paragraph1").innerHTML = inputs1.join(". ");
    }
}

function getParagraph2() {
    for (i = 1; i <= 6; i++) {
        inputs2.push(document.getElementById("input"+ i +"_para2").value);
        document.getElementById("paragraph2").innerHTML = inputs2.join(". ");
    }
}