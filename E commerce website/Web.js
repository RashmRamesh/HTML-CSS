const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link'); 
const registerLink =document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    forms.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    forms.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {

    wrapper.classList.add('active-popup');

});




iconClose.addEventListener('click', ()=> {

    wrapper.classList.remove('active-popup');

});
