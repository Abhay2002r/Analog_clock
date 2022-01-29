let a;
let time;
let h , m , s;
setInterval(() => {
    a= new Date(); 
    if(a.getHours()<10){
        h= "0"+a.getHours();
    }
    else{
    h = a.getHours();
    }
    if(a.getMinutes()<10){
        m= "0"+a.getMinutes();
    }
    else{
    m = a.getMinutes();
    }
    if(a.getSeconds()<10){
        s= "0"+a.getSeconds();
    }
    else{
    s = a.getSeconds();
    }
    d = "Today's Date : "+a.getDate()+" / "+(a.getMonth()+1)+" / "+a.getFullYear();
    document.getElementById('hour').innerHTML= h;
    document.getElementById('minute').innerHTML= m ;
    document.getElementById('Sec').innerHTML = s ;
    document.getElementById('date').innerHTML = d;
}, 1000);

let d ,h_t , m_t , s_t , hrotate,mrotate, srotate;

setInterval(() => {
    d = new Date();
    h_t = d.getHours();
    m_t = d.getMinutes();
    s_t = d.getSeconds();

    hrotate = 30*h_t + m_t/2;
    mrotate = 6*m_t;
    srotate = 6*s_t;

    document.getElementById("hour_cl").style.transform = `rotate(${hrotate}deg)`;
    document.getElementById("minute_cl").style.transform = `rotate(${mrotate}deg)`;
    document.getElementById("sec").style.transform = `rotate(${srotate}deg)`;
    
}, 1000);
function change_analog(){
    document.getElementById("second").innerHTML = `<div id="clockContainer">
    <div id="hour_cl"></div>
    <div id="minute_cl"></div>
    <div id="sec"></div>
    </div>`; 
}
function change_digtal(){
    document.getElementById("second").innerHTML = `<div class="minicontainer" id="hour"></div>
    <div class="minicontainer , coloun">:</div>
    <div class="minicontainer" id="minute"></div>
    <div class="minicontainer , coloun">:</div>
    <div class="minicontainer" id="Sec"></div>`; 
}