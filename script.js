setInterval(myFunction,1000);

function myFunction(){
    let d=new Date;
    document.querySelector(".hours").innerHTML=formatTime(d.getHours()%12 || 12);//converting to 12 hour time. 12 is for midnight and noon
    document.querySelector(".minutes").innerHTML=formatTime(d.getMinutes());
    document.querySelector(".seconds").innerHTML=formatTime(d.getSeconds());
    document.querySelector(".amPm").innerHTML=d.getHours()>=12?"PM":"AM";

}

//add leading 0s for single value
function formatTime(time)
{
    return time<10?'0'+time:time;
}