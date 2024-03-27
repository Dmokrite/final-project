import User from '#models/user'
import { patchUserValidator, userExistValidator } from '#validators/user_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async getAllUsers({ response }: HttpContext) {
    const users = await User.all()
    return response.ok({
      users,
    })
  }

  async getAllFullUsers({ response }: HttpContext) {
    const users = await User.query().preload('announce').preload('userProfile')
    return response.ok({
      users,
    })
  }

  async getOneUser({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await User.findOrFail(params.id)
    return response.ok({
      user,
    })
  }

  async getOneFullUser({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await User.query()
      .where('id', params.id)
      .preload('userProfile')
      .preload('announce')
    return response.ok({
      user,
    })
  }

  async updateOneUser({ params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    await request.validateUsing(patchUserValidator)

    const user = await User.findOrFail(params.id)
    const reqBody = request.body()
    user.merge(reqBody)
    await user.save()
    return response.ok({
      message: `user ${params.id} has been updated`,
    })
  }

  async deleteOneUser({ auth, params, request, response }: HttpContext) {
    await request.validateUsing(userExistValidator)
    const user = await auth.authenticate()

    if (user.id !== +params.id && user.userType !== 'admin') {
      return response.status(401).json({
        message: 'Unauthorized access',
      })
    }
    if (user.id === +params.id || user.userType === 'admin') {
      await user.delete()
      return response.ok({
        message: `user ${params.id} has been deleted`,
      })
    }
  }
}
