const form=document.getElementById('form');
const input=document.getElementById('input-mail');
const text=document.getElementById('warning-msg');
const icon=document.getElementById('icon-error');



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateEmail();
});


const validateEmail=()=>{
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(input.value) ){
		validateOk();
	}else{
		validateError();
	}
}

const validateError=()=>{
    text.style.display="block";
    icon.style.display="block";
}

const validateOk=()=>{
    input.value='';
    text.style.display="none";
    icon.style.display="none";
}




