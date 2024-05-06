function change(){
    var selectbox=document.getElementById("selectarea").value;
    var output=document.getElementById("images")
    
    if(selectbox=="Apples"){
        output.innerHTML="<img src='imgs/apple.jpg' alt='apple'>";
    
       
    }else if(selectbox=="Banana"){
        output.innerHTML="<img src='imgs/banana.jpeg.jpg' alt='banana'>";
    }
    else{
        output.innerHTML="<p>error</p> " 
    }

}