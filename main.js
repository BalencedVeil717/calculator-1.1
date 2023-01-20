// TIME
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('p').innerHTML = t_str;
}
setInterval(updateTime, 1000);

// ARITHMETIC 
function add() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var addit = parseFloat(x) + parseFloat(y);
    document.getElementById("screen1").innerHTML=addit;
  }

  function sub() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var subit = parseFloat(x) - parseFloat(y);
    document.getElementById("screen1").innerHTML=subit;
  }
  
  function div() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var divit = parseFloat(x) / parseFloat(y);
    document.getElementById("screen1").innerHTML=divit;
  }
  
  function mult() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var multit = parseFloat(x) * parseFloat(y);
    document.getElementById("screen1").innerHTML=multit;
  }
  
  function root() {
    var x = document.getElementById("a").value;
    var rootit = Math.sqrt(x);
    document.getElementById("screen1").innerHTML=rootit;
  }

  function sqrt() {
    var x = document.getElementById("a").value;
    var sqrt = parseFloat(x) * parseFloat(x);
    document.getElementById("screen1").innerHTML=sqrt;
  }
  
