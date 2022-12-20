const social_pages={};
const base_url="http://127.0.0.1:8000/api/v0.1/user/";

social_pages.Console=(title, values, oneValue=true)=>{
  console.log("---" + title + "---");
  if(oneValue){
    console.log(values);
  }
  else{
    for(let i=0; i<values.length; i++){
      console.log(values[i]);
    }
  }
  console.log("--/" + title + "---");
};

social_pages.loadFor=(page)=>{
  eval("social_pages.load_" + page + "();");
};

social_pages.postAPI=async(api_url, api_data)=>{
  try{
    return await axios.post(api_url, api_data);
  }
  catch(error){
    social_pages.Console("Error from Linking (POST)", error);
  }
};

social_pages.getAPI=async(api_url)=>{
  try{
    return await axios(api_url);
  }
  catch(error){
    social_pages.Console("Error from Linking (GET)", error);
  }
};

const submit=document.getElementById("to-home");

submit.addEventListener("click", async function(){
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const post_url=base_url+"login";
  const data={
    email: email,
    password: password
  };
  const response=await social_pages.postAPI(post_url, data);
  submit.href="home.html";

  // if(response.data.id!=-1)
  //   submit.href="home.html";
  // else
  //   submit.href="signup.html";
});