const logout = document.querySelector('#logout')
logout.addEventListener('click', () => {
    
  document.querySelector('.modal__logout').showModal()
  localStorage.removeItem('login_success')
  
})

const modallogout = document.querySelector('.modal__logout')
const modalCloselogout = document.querySelector('.btn__modal__logout')
const modalAcceptlogout = document.querySelector('.btn__modal__logout__accept')

modalCloselogout.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__logout')) {
    modallogout.close()
    window.location.href = '/Talleres/E-commerce-proyecto-1/assets/html/login.html'
  }   
})

modalAcceptlogout.addEventListener('click', (e) => {
  if (e.target.closest('.btn__modal__logout__accept')) {
    modallogout.close()
    window.location.href = '/Talleres/E-commerce-proyecto-1/assets/html/login.html'
  }
})


function account () {
  const userDOM = document.querySelector('.container__user')
  const accountSuccess = JSON.parse(localStorage.getItem('login_success')) || false;
  let accountDOM = ''
  
  if (accountSuccess) {

    accountDOM = `
    <div class="container__info__user">
     <p class="user__info">Usuario</p>
     <span class="user__data">${accountSuccess.name}</span>
     <p class="user__info">Contraseña</p>
     <span class="user__data">${accountSuccess.password}</span>
     <p class="user__info">Correo</p>
     <span class="user__data">${accountSuccess.email}</span>
    </div>
    <div class="btn__user">
      <button type="button" id="logout" class="logout index link__log--reg">Cerrar Sesión</button>
      <a class="index " href="/Talleres/E-commerce-proyecto-1/index.html">Volver</a>
    </div>
    `
    userDOM.innerHTML = accountDOM
        
  } else {
    window.location.href = '/Talleres/E-commerce-proyecto-1/assets/html/login.html' 
  }
}

account()

