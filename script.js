var comp = false;
var comma = false;
var operant = false
var first = true;
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(e) {

    if (e.keyCode == 13) {
        process();
        return;
    }
}

function forcomma() {
    var r = document.getElementById("output").value;

    if (first == true && comma == false&& operant ==false) {
        r += ".";
        document.getElementById("output").value = r;
        comma = true;
        operant = true;
        first = false;
    }
    // else if(sayı değil operatör ise) {
    //     operant=true;
    //     comma=
    //     control(".")

    // }
}

function removeZero() {

    var r = document.getElementById("output").value;
    if (r == "0") {
        r = " ";
        document.getElementById("output").value = r;
    }
}


function process() {
    var r = document.getElementById("output").value;

    if (r.includes('%')) {

        var d = r.split('%');
        var result = Number(d[0]) / (100) * Number(d[1]);
        document.getElementById("output").value = result;
    }
    //addition
    else if (r.includes('+')) {
        var l = r.toString();
        var d = l.split('+');
        var result = 0;
        d.forEach(de => {

            result += Number(de);

        });
        document.getElementById("output").value = result;

    }
    //multiplication
    else if (r.includes('*')) {
        var l = r.toString();
        var d = l.split('*');
        var result = 1;
        d.forEach(de => {

            result *= Number(de);

        });
        document.getElementById("output").value = result;
    }
    //subtract
    else if (r.includes('-')) {
        var l = r.toString();
        var d = l.split('-');
        let result = Number(d[0] - Number(d[1]));
        document.getElementById("output").value = result;
    }
    // division
    else if (r.includes('/')) {
        var l = r.toString();
        var d = l.split('/');
        let result = Number(d[0] / Number(d[1]));
        document.getElementById("output").value = result;
    }
    // comma=false
    // first=true
}

function changevalue() {
    var r = document.getElementById("output").value;
    var n = Number(r);
    n *= -1;
    document.getElementById("output").value = n;
}

function clean(s) {
    var r = document.getElementById("output").value;
    if (s == 'C') {
        r = "0";
    } else if (s == 'AC') {
        r = " ";

    } else if (s == 'x') {
        const del = r.slice(0, -1)
        r = del;
    }
    comma = false;
    first=true
    operant=false
    document.getElementById("output").value = r;
}

function back() {

    comp = false;
    operant = false;
    comma = false;
    first = true;
    clean('x');

}

function control(a) {
    var r = document.getElementById("output").value;
    if (r != " ") {
        if (operant == false) {
            r += a;
            document.getElementById("output").value = r;
            operant = true;
            comma = false;
            first=true


        } else if (operant == true) {
            operant = false;
            comma = false;
            back();
            control(a);

        }
    }
}

function f(number) {

    if (r == "0") {
        back();
        f(number);
    }
    removeZero();
    document.getElementById("output").value += number;
    operant = false;
    var r = document.getElementById("output").value;



}