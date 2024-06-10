function changecolor(){
    document.getElementById('content1').style.color = "red";
}

function revertColor() {
    var content = document.getElementById('content1') .style.color = "white" ;
    content.style.color = presentColor;
}
