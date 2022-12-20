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

social_pages.postAPI=async(api_url, api_data, api_token=null)=>{
  try{
    return await axios.post(api_url, api_data, {
      headers: {
        Authorization: "token " + api_token,
      },
    });
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
