/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('components/layout/index').as('index')
router.on('/about').render('pages/about').as('about')
router.on('/contact').render('pages/contact').as('contact')
router.on('/shop').render('pages/shop').as('shop')
router.on('/singleproduct').render('pages/singleproduct').as('singleproduct')
router.on('/cart').render('pages/cart').as('cart')
router.on('/checkout').render('pages/checkout').as('checkout')
