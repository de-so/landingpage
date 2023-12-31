let root = document.querySelector('.root');
let mobile = document.querySelector('.mobile');
let laptop = document.querySelector('.laptop');
let screen = document.querySelector('.screen');
let changable1 = document.querySelector('.changable1');
let changable2 = document.querySelector('.changable2');
let changable3 = document.querySelector('.changable3');
let changable4 = document.querySelector('.changable4');
let changable5 = document.querySelector('.changable5');
let loginbtn = document.querySelector('.login');
let logonbtn = document.querySelector('.btn');
let notes = document.querySelector('.notes');
let version = document.querySelector('.version');
let message = document.querySelector('.message');
var a = 0;

function trackDeviceWidth() {
  const deviceWidth = window.innerWidth;
  mobile.classList.add('hidden');
  root.classList.remove('hidden');
  if(deviceWidth>1000){
    version.innerHTML = `<strong>D</strong>ESKTOP`;
  }else if(deviceWidth>800){
    version.innerHTML = `<strong>T</strong>AB`;
  }else{
    root.classList.add('hidden');
    mobile.classList.remove('hidden');
    // mobile.innerHTML = `Sorry! Use Desktop...`
    version.innerHTML = `<strong>M</strong>OBILE`;
  }
}
window.addEventListener("load", trackDeviceWidth);
window.addEventListener("resize", trackDeviceWidth);

laptop.addEventListener("mousedown",(e)=>{
  if(a == 0){
    // open
    screen.classList.add('screenLaptop');
    notes.classList.add('slidedown');
    version.classList.add('sliderightentry');
    loginbtn.classList.remove('fastright');
    loginbtn.classList.remove('hidden');
    notes.classList.remove('slideright');
    version.classList.remove('sliderightexit');
    message.style.color = '#23ff3b';
    changable1.innerHTML = `OMG, YOU OPENED...`;
    changable2.innerHTML = `THE LAPTOP...`;
    changable3.innerHTML = `SUCCESSFULLY..!`;
    changable4.innerHTML = `PLEASE LOG ON...`;
    changable5.innerHTML = `TO CONTINUE...`;
    a+=1;
  }else if(a==1){
    // close
    message.style.color = '#ff2929';
    screen.classList.remove('screenLaptop');
    notes.classList.add('slideright');
    loginbtn.classList.add('fastright');
    version.classList.remove('sliderightentry');
    version.classList.add('sliderightexit');
    setTimeout(()=>{
      loginbtn.classList.add('hidden');
    },200);
    changable1.innerHTML = `OOPS, SORRY..!`;
    changable2.innerHTML = `LOOKS LIKE YOU...`;
    changable3.innerHTML = `CLOSED THE LAPTOP!.`;
    changable4.innerHTML = `PLEASE OPEN...`;
    a-=1;
  }
});

loginbtn.addEventListener("click",(e)=>{
  root.classList.add('hidden');
  location.href = "https://deysouvik.000webhostapp.com";
});
logonbtn.addEventListener("click",(e)=>{
  location.href = "https://deysouvik.000webhostapp.com";
});



