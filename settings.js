const change_bio=document.getElementById("change-bio");
const change_email=document.getElementById("change-email");
const change_name=document.getElementById("change-name");
const change_username=document.getElementById("change-username");
const change_number=document.getElementById("change-number");
const change_pfp=document.getElementById("change-pfp");

const setName=()=>{
    const name=document.querySelector(".name");
    name.innerHTML="<h2>Rawan Shmait</h2>";
}
  
const setUsername=()=>{
    const username=document.querySelector(".username");
    username.innerText="@rawan";
}

const setPfp=()=>{
    const pfp=document.querySelector(".profile-pic");
    pfp.innerHTML="<img src='test.png'>";
}
