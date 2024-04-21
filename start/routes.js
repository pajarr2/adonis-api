'use strict'

const RouteGroup = require('@adonisjs/framework/src/Route/Group')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// api prefix
const api = 'api/v1'

// accepted extesions
const exts = ['json', 'table', 'tablejson', 'jsontable']

Route.group(() => {
    Route.get('/product/show', 'ProductController.showProduct')
}).prefix(api).formats(exts)

Route.on('/').render('welcome')
