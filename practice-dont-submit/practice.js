function calculateSum() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num1").value);
    const sum = num1 + num2;

    document.getElementById("result").innerHTML = "The sum is: " + sum;
}




function calculateFactorial() {
    let x = parseInt(document.getElementById("x").value);

    for(let i = x - 1; i > 1; i--) {
        x *= i;
    }

    document.getElementById("newX").innerHTML = "The factorial is: " + x;

}


