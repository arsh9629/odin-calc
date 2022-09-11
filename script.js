let op='';
let str='';
let v1=0;
let v2=0;
let i=0
const para=document.querySelector('.output');
function add(a,b){
    return a+b};
function subtract(a,b){
    return a-b}
function multiply(a,b){
    return a*b}
function divide(a,b){
    if(b==0)return '0'
    return a/b}

function operator(op,a,b){
    if(op=='+'){return `${add(a,b)}`}
    if(op=='-'){return `${subtract(a,b)}`}
    if(op=='*'){return `${multiply(a,b)}`}
    if(op=='/'){return `${divide(a,b)}`}
}
function get(){

    if(this.classList.value=='ac'){
        allclear();
    }
    else if(this.classList.value=='c'){
            str=str.substring(0,str.length-1)
            para.textContent=str
        }
    else if(this.classList.value=='-'){
        assign(this.classList.value);
    }
    else if(this.classList.value=='+'){
        assign(this.classList.value)
    }
    else if(this.classList.value=="*"){
        assign(this.classList.value)
    }
    else if(this.classList.value=='/'){
        assign(this.classList.value)
    }
    else if(this.classList.value[0]=='='){
        v2=Number(str.substring(0,str.length))
        let value=operator(op,v1,v2)
        para.textContent=value
        str=value
    }else{
        str+=this.classList.value;
        para.textContent=str
        console.log(str)
    }
}
const keys=document.querySelectorAll('#key')
keys.forEach(key=>{
    key.addEventListener('click',get)
});

function assign(e){
    v1=Number(str.substring(0,str.length));
    op=e;
    // str+=e
    // i=str.indexOf(op)
    para.textContent=op;
    str='';
}
function allclear(){   
    para.textContent='';
    str='';
}