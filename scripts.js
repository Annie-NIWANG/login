(function(){
    const username=document.getElementById('username')
    const password=document.getElementById('password')
    const button=document.querySelector('.login-btn')
    const form=document.querySelector('.login-box')
    username.oninput=(e)=>{
        username.value=e.target.value;
        if(!e.target.value){
            button.disabled=true
            return;
        }
        if(password.value){
            button.disabled=false
            
        }
    }
   
    password.oninput=(e)=>{
        password.value=e.target.value;
        if(!e.target.value){
            button.disabled=true
            return;
        }
        if(username.value){
            button.disabled=false
            
        }
    }
   form.onsubmit=()=>{
    const userValue = username.value;
    const pswValue = password.value;
    if(userValue==="admin"&&pswValue==='1234'){
    alert('login successful')
    }else{
        alert('username or password is not correct')
    }
   }

}()
)