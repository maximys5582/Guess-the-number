    let prNum,tempOut,counter;
    
    prNum = Math.floor((Math.random() * 10) + 1);
    tempOut = document.getElementById('temp-out');
    tempOut.innerHTML = prNum;
    counter = document.getElementById('counter');

function f1() {
    var num, out;


    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum){
        out.innerHTML = 'Вы угадали';
        prNum = Math.floor((Math.random() * 10) + 1);
        tempOut.innerHTML = prNum;
        let count =0;
        count++;

        counter.innerHTML = count;
        
    } 
    else if(num > prNum){
        out.innerHTML = 'Число больше заданного'
    } 
    else {
        out.innerHTML = 'Число меньше заданного'
    }
}