/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AuthController = () => import('#controllers/auth_controller')
const UserController = () => import('#controllers/user_controller')
const UserProfilesController = () => import('#controllers/user_profiles_controller')
const PracticesController = () => import('#controllers/practices_controller')
const AnnounceController = () => import('#controllers/announce_controller')
const GalleriesController = () => import('#controllers/galleries_controller')

router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
  })
  .prefix('auth')

router
  .group(() => {
    router
      .group(() => {
        router.get('all', [UserController, 'getAllUsers'])
        router.get('all/full', [UserController, 'getAllFullUsers'])
        router.get(':id', [UserController, 'getOneUser'])
        router.get(':id/full', [UserController, 'getOneFullUser'])
        router.patch(':id', [UserController, 'updateOneUser'])
        router.delete(':id', [UserController, 'deleteOneUser'])
        router.get(':id/profile', [UserProfilesController, 'getUserProfile'])
        router.post(':id/profile', [UserProfilesController, 'upsertUserProfile'])
        router.patch(':id/profile', [UserProfilesController, 'upsertUserProfile'])
        router.delete(':id/profile', [UserProfilesController, 'deleteUserProfile'])
        router.get(':id/announce', [AnnounceController, 'getOneAnnounce'])
        router.post(':id/announce', [AnnounceController, 'createAnnounce'])
        router.patch(':id/announce', [AnnounceController, 'updateAnnounce'])
        router.delete(':id/announce', [AnnounceController, 'deleteAnnounce'])
        router.get(':id/gallery', [GalleriesController, 'getFiles'])
        router.post(':id/gallery', [GalleriesController, 'addFileName'])
        router.patch(':id/gallery/:name', [GalleriesController, 'updateFile'])
        router.delete(':id/gallery/:name', [GalleriesController, 'removeFileName'])
      })
      .prefix('user')
      .use(middleware.auth())

    router.get('practices', [PracticesController, 'getAllPractices']).use(middleware.auth())
    router.get('profiles', [UserProfilesController, 'getAllUserProfile']).use(middleware.auth())
    router.get('announces', [AnnounceController, 'getAllAnnounces']).use(middleware.auth())
    
  })
  .prefix('api')
