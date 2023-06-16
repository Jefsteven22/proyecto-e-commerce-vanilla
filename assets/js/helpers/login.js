const loginForm = document.querySelector('#login__form')

loginForm.addEventListener('submit', (e) => {
  
  e.preventDefault()
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const users = JSON.parse(localStorage.getItem('users')) || []
  const validUser = users.find(user => user.email === email && user.password === password)
  
  
  if (!validUser) {
    return document.querySelector('.modal__login__error').showModal()
  } else {
    
    document.querySelector('.modal__login').showModal()
    localStorage.setItem('login_success', JSON.stringify(validUser))
    
  }
  
})

// MODALS

  const modalLoginError = document.querySelector('.modal__login__error')
  const modalCloseLoginError = document.querySelector('.btn__modal__login__error')
  const modalAcceptLoginError = document.querySelector('.btn__modal__login__error__accept')

  modalCloseLoginError.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__login__error')) {
      modalLoginError.close()
    }   
  })

  modalAcceptLoginError.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__login__error__accept')) {
      modalLoginError.close()
    }
  })

  const modalLogin = document.querySelector('.modal__login')
  const modalCloseLogin = document.querySelector('.btn__modal__login')
  const modalAcceptLogin = document.querySelector('.btn__modal__login__accept')

  modalCloseLogin.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__login')) {
      modalLogin.close()
      window.location.href = '/index.html'
    }   
  })

  modalAcceptLogin.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__login__accept')) {
      modalLogin.close()
      window.location.href = '/index.html'
    }
  })

