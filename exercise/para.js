function addNumbers(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById('add').value = sum;
    }