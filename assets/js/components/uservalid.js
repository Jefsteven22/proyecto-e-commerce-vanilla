function uservalid () {
 
  const user = JSON.parse(localStorage.getItem('login_success')) || false

  if (!user) {
    window.location.href = '/Talleres/E-commerce-proyecto-1/assets/html/login.html'
  }

}

export default uservalid