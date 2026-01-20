/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/auth/signup', [controllers.NewAccount, 'store'])
    router.post('/auth/login', [controllers.Session, 'store'])
    router.post('/auth/logout', [controllers.Session, 'destroy']).use(middleware.auth())

    router
      .group(() => {
        router.get('/me', async ({ auth }) => {
          return auth.getUserOrFail()
        })
      })
      .use(middleware.auth())
  })
  .prefix('/api/v1')
