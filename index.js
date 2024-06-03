let endDate="11 June 2024 09:30:00 AM";

document.getElementById("end-date").innerText=endDate;
let input = document.querySelectorAll("input");

function clock(){
    let end =new Date(endDate);
    let now= new Date()
     let diff =(end -now)/1000;
     if(diff<0) return;
    input[0].value=Math.floor(diff/3600/24);
    input[1].value=Math.floor((diff/3600)%24);
    input[2].value=Math.floor((diff/60)%60);
    input[3].value=Math.floor((diff)%60);
      
}
setInterval(
    ()=>{
        clock();
    },1000
)
clock();