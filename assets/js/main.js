import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./components/cart.js"
import darkMode from "./helpers/darkMode.js"
import search from "./components/search.js"
import showSearch from "./components/showSearch.js"
import modals from "./components/modals.js"
import uservalid from "./components/uservalid.js"

                /* UI Elemensts */
/* Dark Mode */
darkMode()

/* Search */
search()

/* Hidden Loader */
loader()

/* Show Menu */
showMenu()

/* Show cart */
showCart()

/* Show Search */
showSearch()

/* Modals */
modals()

/* User Valid */
uservalid()

                /* End UI Elemensts */

/* Products */

const { db, printProducts} = products(await getProducts())

/* Cart */
cart(db, printProducts)


// const user = JSON.parse(localStorage.getItem('login_success')) || false

//   if (!user) {
//     window.location.href = '/Talleres/E-commerce-proyecto-1/assets/html/login.html'
//   }