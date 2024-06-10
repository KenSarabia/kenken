function add1() {
    let x = document.getElementById("num1").value;
    const y = document.getElementById("num2").value;
    var a = Number(x) + Number(y);
    document.getElementById('ans1').value = a;
    }
    
    function sub2() {
    let x = document.getElementById("sub1").value;
    const y = document.getElementById("sub2").value;
    var b = Number(x) - Number(y);
    document.getElementById('ans2').value = b;
    }
    
    function mul3() {
    let x = document.getElementById("mul1").value;
    const y = document.getElementById("mul2").value;
    var c = Number(x) * Number(y);
    document.getElementById('ans3').value = c;
    }
    
    function div4() {
    let x = document.getElementById("div1").value;
    const y = document.getElementById("div2").value;
    var d = Number(x) / Number(y);
    document.getElementById('ans4').value = d;
    }