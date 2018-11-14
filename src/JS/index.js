var x = prompt("Введите пожалуйста число X", 0);
var n = prompt('Введите пожалуйста степень N для X', 0);
if (n <= 1) alert('Внимание! Введите целую степень, большую 1');
else pow(x, n);

document.getElementById('Element_X').innerHTML = x;
document.getElementById('Element_N').innerHTML = n;



function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }

    alert(result);
}
