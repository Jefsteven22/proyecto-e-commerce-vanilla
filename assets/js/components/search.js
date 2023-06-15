function search() {
  
  document.addEventListener('keyup', function (e) {
    
    if (e.target.matches('.search--bar')) {
      
      document.querySelectorAll('.product').forEach(item => {
        item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?item.classList.remove('filter')
        :item.classList.add('filter')
      })
      
      
    }
  })

}

export default search