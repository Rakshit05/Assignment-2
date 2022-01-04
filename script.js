let answer = document.getElementById("inptext");
let list = document.getElementById("memory-list");
let list1 = document.getElementById("history-list");
let memoryRegister = [];
let HistoryRegister = [];
//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc from button
let calculate = (number) => {
    if (answer.value === "") {
        if(isNaN(number)){
            if(number=="-" || number=="("){
                answer.value += number;
            }
         }else{
            answer.value += number;
        }
    }
    else{
       
        ch = answer.value;
        ch=String(ch);
        ch=ch.slice(-1);
        if(isNaN(ch)){
            if(isNaN(number)){
                calch=answer.value;
                calch=calch.substring(0, calch.length - 1);
                console.log("replace",calch);
                answer.value = calch;
                answer.value += number;
                console.log(calch);
             }else{
                answer.value += number;
             }
         } 
         else{
            answer.value += number;
         }
    }
};
// equal operator
let Answer = () => {
    //condition checks the value contains ^ if yes then it will perform x^y
    if(answer.value.includes("^")){
        temp = answer.value;
        x = temp.split("^")[0];
        y = temp.substring(temp.indexOf("^") + 1);
       answer.value = Math.pow(x,y);
   }
        ansch = answer.value;
        console.log("ansch",ansch);
        ansch=String(ansch);
        anschnew=ansch.slice(-1);
        console.log("anschnew",anschnew);
        if(isNaN(anschnew)){
            ansch=ansch.substring(0, ansch.length - 1);
            numberbefore=ansch
            console.log("numberbefore",numberbefore);
        }
        else{
             numberbefore = answer.value;
        }

 
    document.getElementById("sm").innerHTML=numberbefore; // displaying operations
    answer.value = eval(numberbefore);// for calculating basic math operations
    numberafter = answer.value;
    num = numberbefore + '=' + numberafter;
    if(Number.isNaN(numberafter))return; // checks nan if yes then returned else will considered as number
    HistoryRegister.push(num); //pushes the elements in array
    list1.innerHTML='';
    HistoryRegister.forEach((element) => {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
    });

}
//clear function
let clr = () =>
{
    document.getElementById("sm").innerHTML="";
    answer.value= "";
}

//backspace / delete function
let del = () => answer.value = answer.value.slice(0, -1);

//square root function
let sqrt = () => answer.value = Math.sqrt(answer.value);
   
//factorial function
let  fact = () => {
    n = answer.value;
    facto = 1;
        if(n == 0 || n == 1){
            facto = 1;
        }
        else{
            for( i = n; i >= 1; i--)
            {
            facto = facto * i;
            }
        }
    answer.value = facto;
}


//function radian to degree
let Deg = () => {
    rad = answer.value;
    deg = (rad*180)/3.14;
    answer.value = deg;
}

//function Farenhiet to celcius
let f_e = () => {
    cel = answer.value;
    far = cel * 1.8 + 32;
    answer.value = far;
}

//function square
let square = () => answer.value = Math.pow(answer.value , 2);

//function logarithm
let log = () => answer.value = Math.log10(answer.value);

//function ln
let ln = () => answer.value = Math.log(answer.value);

//function 10pow x
let powx = () => answer.value = Math.pow(10 , answer.value);

//function exp
let exp = () => answer.value = Math.exp(answer.value);

// function sin
let sin = () => answer.value = Math.sin(answer.value);

// function tan
let tan = () => answer.value = Math.tan(answer.value);

// function cos
let cos = () => answer.value = Math.cos(answer.value);

// function asin
let asin = () => answer.value = Math.asin(answer.value);

// function acos
let acos = () => answer.value = Math.acos(answer.value);

// function atan
let atan = () => answer.value = Math.atan(answer.value);

// function floor
let floor = () => answer.value = Math.floor(answer.value);

// function ceil
let ceil = () => answer.value = Math.ceil(answer.value);

//function random
let random = () => answer.value = Math.random(answer.value);

//function trunc
let trunc = () => answer.value = Math.trunc(answer.value);

//function abs=>| x |
let abs = () => answer.value = Math.abs(answer.value);

//function reciprocal
let reciprocal = () => answer.value = 1/answer.value;

// function x^3
let xpow3 = () => answer.value = Math.pow(answer.value , 3);

// function 2^x
let powof2x = () => answer.value = Math.pow(2 , answer.value);

//function of cuberoot
let cbrt = () => answer.value = Math.cbrt(answer.value);

// function of +/-
let pm =  () =>     answer.value = -answer.value;

//function for memory button to toggle and show the memory
let Memory = () => {
    div = document.getElementsByClassName('show').item(0);
    if(div.style.display == 'block'){
        div.style.display = 'none';
       
    }
    else{
        div.style.display = 'block';
    }
}
//function for history button to toggle and show the history
let history = () => {
    div = document.getElementsByClassName('show1').item(0);
    if(div.style.display == 'block'){
        div.style.display = 'none';
    }
    else{
        div.style.display = 'block';
    }
}
// function memory save
let MemorySave = () =>{
    num = answer.value;
    if(Number.isNaN(num))return; // checks nan if yes then returned else will considered as number
    memoryRegister.push(num); //pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
}

//function memory plus
let memoryplus = () => {
    num = answer.value;
    if(Number.isNaN(num)) return; // checks nan if yes then returned else will considered as number
    lastvalue = list.lastChild.innerHTML; // takes last element of list and stores in lastvalue
    ans = parseInt(lastvalue) + parseInt(num); //adds the last item in memory and the number
    memoryRegister.pop(lastvalue);//pops out the lastvalue in array
    memoryRegister.push(ans);//pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
}

//function memory minus
let memoryminus = () => {
    num = answer.value;
    if(Number.isNaN(num)) return; // checks  nan if yes then returned else will considered as number
    lastvalue = list.lastChild.innerHTML;  // takes last element of list and stores in lastvalue
    ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
    memoryRegister.pop(lastvalue);//pops out the lastvalue in array
    memoryRegister.push(ans);//pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
}

//function memory recall
let memoryrecall = () => {
    answer.value = list.lastChild.innerHTML; //prints last element in list on display
}

//function memory clear
let memoryclear = () => {
    list.innerHTML='';
    memoryRegister.forEach((element)=>{
    while(memoryRegister.length){
        memoryRegister.pop();
    }
  })
}
//function for taking input from keyboard
let myFunction = (event) => {
    unicode= event.which;
    console.log("event",event)
    console.log(unicode);
    if (unicode>=48 && unicode <=57 || unicode==94 || unicode==40 || unicode==41  || unicode==42 || unicode==43  || unicode==45 || unicode==47  ){
    console.log("event1",event)
    calculate(event.key);
    }
    else{
    }
    if(unicode==13){
        Answer();
    }
    if (unicode == 46 ) {
        del();
    } 
}