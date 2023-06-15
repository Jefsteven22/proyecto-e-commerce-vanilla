function showSearch() {

  const nav = document.querySelector('.nav');
  const div = document.querySelector('.search__bar')

  nav.addEventListener('click', function (e) {
    
    if (e.target.closest('.btn--search')) {
      div.classList.toggle('show--search')
    }

  })
}

export default showSearch