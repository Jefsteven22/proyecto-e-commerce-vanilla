function uservalid () {
 
  const user = JSON.parse(localStorage.getItem('login_success')) || false

  if (!user) {
    window.location.href = '/assets/html/login.html'
  }

}

export default uservalid