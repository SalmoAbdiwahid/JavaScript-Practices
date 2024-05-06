function getfruit(){
    var selectbox=document.getElementById("selectarea").value;
    var output=document.getElementById("images")
    
    if(selectbox=="Apples"){
      output.innerHTML="<img src='/img/apple2.jpg' alt='apple'>";
    //   output.style.height = '10px';
    //   output.style.width = '10px';

       
    }else if(selectbox=="Lemons"){
        output.innerHTML="<img src='/img/lemon2.jpg' alt='lemons'>";
    }else if(selectbox=="Strawberries"){ 
        output.innerHTML="<img src='/img/berries2.jpg' alt='lemons'>";  
    }
    else{
        output.innerHTML="<p>error</p> " 
    }

}