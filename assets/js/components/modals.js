function modals () {
  
  const modalStock = document.querySelector('.modal__stock')
  const modalClose = document.querySelector('.btn__modal__close')
  const modalAccept = document.querySelector('.btn__modal')

  modalClose.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__close')) {
      modalStock.close()
    }   
  })

  modalAccept.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal')) {
      modalStock.close()
    }
  })

  const modalCartEmpty = document.querySelector('.modal__cart__empty')
  const modalCloseCart = document.querySelector('.btn--modal--card')
  const modalAcceptCart = document.querySelector('.btn--modal--card--accept')

  modalCloseCart.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__close')) {
      modalCartEmpty.close()
    }   
  })

  modalAcceptCart.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal')) {
      modalCartEmpty.close()
    }
  })

  const modalCheckout = document.querySelector('.modal__checkout')
  const modalCloseCheckout = document.querySelector('.btn--modal--checkout')
  const modalAcceptCheckout = document.querySelector('.btn--modal--checkout--accept')

  modalCloseCheckout.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal__close')) {
      modalCheckout.close()
    }   
  })

  modalAcceptCheckout.addEventListener('click', (e) => {
    if (e.target.closest('.btn__modal')) {
      modalCheckout.close()
    }
  })




}

export default modals