const alert = document.querySelector(".alert")
const email = document.querySelector('.email')
const submitBtn = document.querySelector('.btn')

submitBtn.addEventListener('click', (e) => {
    
    if (!ValidateEmail(email)){
        alert.classList.add('active')
        e.preventDefault()
    }
})

email.addEventListener('focus', () =>{
    alert.classList.remove('active')
})


function ValidateEmail(inputText){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}