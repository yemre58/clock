
let name=prompt("kullanıcı adını gir:")
var myNames = document.getElementById("myName");
myNames.innerHTML=name ;

function showTime() {
    var myClock = document.getElementById("myClock");
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; 
    var year = now.getFullYear();
  
   
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
   
    myClock.innerHTML =
      "Tarih: " +
      day +
      "/" +
      month +
      "/" +
      year +
      " Saat: " +
      hour +
      ":" +
      minute +
      ":" +
      second;
  
    
    setTimeout(showTime, 1000);
  }
  
  showTime();
  