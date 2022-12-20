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

// const editing_options=document.querySelectorAll(".editing");
// editing_options.forEach((element)=>{
//     element.addEventListener("click", function(){
//         element.style.backgroundColor="#e2336b";
//         element.style.color="#DEBACE";
//     });
// });

change_bio.addEventListener("click", function(){
    change_bio.style.color="#DEBACE";
    change_bio.style.backgroundColor="#e2336b";
    change_email.style.backgroundColor="#DEBACE";
    change_email.style.cssText=":hover{background-color: #e2336b; color: #DEBACE;}";
    change_name.style.backgroundColor="#DEBACE";
    change_name.style.cssText=":hover{background-color: #e2336b; color: #DEBACE;}";
    change_username.style.backgroundColor="#DEBACE";
    change_username.style.cssText=":hover{background-color: #e2336b; color: #DEBACE;}";
    change_number.style.backgroundColor="#DEBACE";
    change_number.style.cssText=":hover{background-color: #e2336b; color: #DEBACE;}";
    change_pfp.style.backgroundColor="#DEBACE";
    change_pfp.style.cssText=":hover{background-color: #e2336b; color: #DEBACE;}";
});
