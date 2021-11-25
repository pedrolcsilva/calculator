let num1 = document.getElementById('screen1');
let num2 = document.getElementById('screen2');
let resultado = document.getElementById('resultado');
let op = document.getElementById('op');

function soma(){
  op.innerHTML = '+';
  console.log(op);
}

function sub(){
  op.innerHTML = '-';
  console.log(op);
}

function div(){
  op.innerHTML = '/';
  console.log(op);
}

function mult(){
  op.innerHTML = '*'
  console.log(op);
}

function number(numero){
  if(op.innerHTML == ''){
    num1.innerHTML += numero;
  }else{
    num2.innerHTML += numero;
  }
}

function result(){
  let valuef
  if(op.innerHTML == '+'){
    valuef=  parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
  } 
  else if(op.innerHTML == '-'){
    valuef = parseFloat(num1.innerHTML) - parseFloat(num2.innerHTML);
  }
  else if(op.innerHTML == '*'){
    valuef = parseFloat(num1.innerHTML) * parseFloat(num2.innerHTML);
  }
  else if(op.innerHTML == '/'){
    valuef = parseFloat(num1.innerHTML) / parseFloat(num2.innerHTML);
  }
  resultado.innerHTML = valuef.toPrecision(5);
  op.innerHTML = '';
  num1.innerHTML = '';
  num2.innerHTML = '';

}

function eraser(){
  op.innerHTML = '';
  num1.innerHTML = '';
  num2.innerHTML = '';
  resultado.innerHTML = '';
}

  