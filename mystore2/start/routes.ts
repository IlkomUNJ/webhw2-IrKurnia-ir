/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/checkout').render('pages/checkout')
router.on('/about').render('pages/about')
router.on('/contact').render('pages/contact')
