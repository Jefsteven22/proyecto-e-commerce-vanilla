function darkMode () {

  const btnSwitch = document.querySelector('.switch');
  
  btnSwitch.addEventListener('click', function (e) {

    if (e.target.closest('.switch')) {
      document.body.classList.toggle('dark')
    }

    if (e.target.closest('.switch')) {
      btnSwitch.classList.toggle('switch__active')
    }
    
    if (document.body.classList.contains('dark')) {

      localStorage.setItem('dark-mode', 'true')
  
    } else {
  
      localStorage.setItem('dark-mode', 'false')
    }
  
    
  })
  
  if (localStorage.getItem('dark-mode') === 'true') {

    document.body.classList.add('dark')
    btnSwitch.classList.add('switch__active')

  } else {

    document.body.classList.remove('dark')
    btnSwitch.classList.remove('switch__active')
  }
}

export default darkMode