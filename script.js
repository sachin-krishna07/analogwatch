setInterval(function(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let d=new Date();
    let Day=weekday[d.getDay()];
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    document.getElementsByClassName("hours")[0].innerHTML=h;
    document.getElementsByClassName("minutes")[0].innerHTML=m;
    document.getElementsByClassName("second")[0].innerHTML=s;
    document.getElementsByClassName("Day")[0].innerHTML=Day;
},1000)