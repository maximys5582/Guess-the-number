let mynum, out, tempOut, Num;

Num = Math.floor((Math.random() * 10) +1);
tempOut = document.getElementById('temp-out');
tempOut.innerHTML = Num;

function f1() {
    mynum = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (mynum == Num){
        out.innerHTML = 'Вы угадали'
        Num = Math.floor((Math.random() * 10) +1);
        tempOut.innerHTML = Num;
    } else
    if (mynum > Num){
        out.innerHTML = 'Ваше число больше заданного'
    } else {
        out.innerHTML = 'Ваше число меньше заданного'
    }
}