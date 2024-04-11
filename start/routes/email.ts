import router from '@adonisjs/core/services/router'

router.post('/email', () => {
  return { status: 'online' }
})
