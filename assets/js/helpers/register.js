const signupForm = document.querySelector('#register__Form')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  const users = JSON.parse(localStorage.getItem('users')) || []
  const isUserRegistered = users.find(user => user.email === email)
  if (isUserRegistered) {
    return document.querySelector('.modal__register__error').showModal()
  } else {
    users.push({name: name, email: email, password: password})
  }

  localStorage.setItem('users', JSON.stringify(users))
  document.querySelector('.modal__register').showModal()
  
})

// MODALS

const modalRegisterError = document.querySelector('.modal__register__error')
const modalCloseRegisterError = document.querySelector('.btn__modal__register__error')
const modalAcceptRegisterError = document.querySelector('.btn__modal__register__error__accept')

modalCloseRegisterError.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__register__error')) {
    modalRegisterError.close()
  }   
})

modalAcceptRegisterError.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__register__error__accept')) {
    modalRegisterError.close()
      }
})

const modalRegister = document.querySelector('.modal__register')
const modalCloseRegister = document.querySelector('.btn__modal__register')
const modalAcceptRegister = document.querySelector('.btn__modal__register__accept')

modalCloseRegister.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__register')) {
    modalRegister.close()
    window.location.href = 'login.html'
  }   
})

modalAcceptRegister.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__register__accept')) {
    modalRegister.close()
    window.location.href = 'login.html'
  }
})