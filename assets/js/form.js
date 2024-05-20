const selects = document.querySelectorAll('.select-head'),
      options = document.querySelectorAll('.options li');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    });
});

document.addEventListener('click', (e) => {
    selects.forEach(select => {
      select.parentElement.contains(e.target)||(select.parentElement.classList.remove('showSelect'))
    })
  });


options.forEach(option => {
    option.addEventListener('click', () => {
        let elem = option.parentElement.parentElement.parentElement
        elem.classList.toggle('showSelect');
        elem.children[0].children[1].children[0].textContent = option.textContent
    });
});


// Подберем для вас персонального менеджера
const user_name = document.getElementById('name'),
      user_phone = document.getElementById('phone'),
      submit_btn = document.querySelector('.block6-form .form-btn');


submit_btn.addEventListener('click', () => {
    checkInputs();
    let successName = user_name.nextElementSibling.classList,
    successPhone = user_phone.nextElementSibling.classList;

    if(successName == 'success' && successPhone == 'success') {
        submit_btn.type = 'submit'
    }
})

function checkInputs() {
    let user_value = user_name.value.trim(),
    phone_value = user_phone.value.trim();

    if(user_value === '') {
        setErrorFor(user_name, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_name)
        user_name.nextElementSibling.classList.add('success');
    }
    
    if(phone_value === '') {
        setErrorFor(user_phone, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_phone)
        user_phone.nextElementSibling.classList.add('success');
    }
}


// Пригласите нас в тендер
const user_name2 = document.getElementById('name2'),
      user_email = document.getElementById('email'),
      user_text = document.getElementById('message'),
      submit_btn2 = document.querySelector('.block7-form .form-btn');


submit_btn2.addEventListener('click', () => {
    checkInputsTender();
    let successName2 = user_name2.nextElementSibling.classList,
        successText = user_text.nextElementSibling.classList,
        successEmail = user_email.nextElementSibling.classList;

    if(successName2 == 'success' && successEmail == 'success' && successText == 'success') {
        submit_btn.type = 'submit'
    }


})

function checkInputsTender() {
       let user_value2 = user_name2.value.trim(),
            text_value = user_text.value.trim(),
            email_value = user_email.value.trim();

        if(user_value2 === '') {
            setErrorFor(user_name2, '1px solid #E51017')
            
            } else {
            setSuccesFor(user_name2)
            user_name2.nextElementSibling.classList.add('success');
        }
        
        if(email_value === '') {
            setErrorFor(user_email, '1px solid #E51017')
        }
            else if(!isEmail(email_value)) {
                setErrorFor(user_email, '1px solid #E47169')
            }
         else {
            setSuccesFor(user_email)
            user_email.nextElementSibling.classList.add('success');
        }
        
        if(text_value === '') {
            setErrorFor(user_text, '1px solid #E51017')
            
            } else {
            setSuccesFor(user_text)
            user_text.nextElementSibling.classList.add('success');
        }
}



// form pop-up
const addOption = document.querySelector('.addOption'),
      unloading = document.querySelector('.unloading'),
      removeOption = document.querySelector('.removeOption')

addOption.addEventListener('click', () => {
    unloading.classList.remove('d-none')
});

removeOption.addEventListener('click', () => {
    unloading.classList.add('d-none')
});


const user_name_pop = document.getElementById('name-pop'),
      user_email_pop = document.getElementById('email-pop'),
      user_phone_pop = document.getElementById('phone-pop'),
      inviteBtn = document.querySelectorAll('.block4-item'),
      popUpForm = document.querySelector('.popUp-form'),
      popUpThanks = document.querySelector('.popUp-thanks'),
      body = document.querySelector('body'),
      submit_btn_pop = document.querySelector('.popUp .form-btn');



inviteBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpForm.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    });
})


      submit_btn_pop.addEventListener('click', () => {
    checkInputsPop();
    let successNamePop = user_name_pop.nextElementSibling.classList,
        successPhonePop = user_phone_pop.nextElementSibling.classList,
        successEmailPop = user_email_pop.nextElementSibling.classList;

    if(successNamePop == 'success' && successPhonePop == 'success' && successEmailPop == 'success') {
        popUpForm.classList.add('d-none');
        popUpThanks.classList.remove('d-none');
    }


})

function checkInputsPop() {
       let user_pop_value = user_name_pop.value.trim(),
            phone_pop_value = user_phone_pop.value.trim(),
            email_pop_value = user_email_pop.value.trim();

        if(user_pop_value === '') {
            setErrorFor(user_name_pop, '1px solid #E51017')
            
            } else {
            setSuccesFor(user_name_pop)
            user_name_pop.nextElementSibling.classList.add('success');
        }
        
        if(email_pop_value === '') {
            setErrorFor(user_email_pop, '1px solid #E51017')
        }
            else if(!isEmail(email_pop_value)) {
                setErrorFor(user_email_pop, '1px solid #E47169')
            }
         else {
            setSuccesFor(user_email_pop)
            user_email_pop.nextElementSibling.classList.add('success');
        }
        
        if(phone_pop_value === '') {
            setErrorFor(user_phone_pop, '1px solid #E51017')
            
            } else {
            setSuccesFor(user_phone_pop)
            user_phone_pop.nextElementSibling.classList.add('success');
        }
}





// validate
function setErrorFor(input, border) {
    input.style.border = border
    input.parentElement.children[3].classList.add('error');
    input.parentElement.children[3].classList.remove('success');
}
    
function setSuccesFor(input) {
    input.style.border = `1px solid #006BE9`;
    input.parentElement.children[3].classList.add('success');
    input.parentElement.children[3].classList.remove('error');
} 
    
    function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}    



// input mask
$("#phone").inputmask({"mask": "+7(999) 999-99-99"});
$("#phone-pop").inputmask({"mask": "+7(999) 999-99-99"});