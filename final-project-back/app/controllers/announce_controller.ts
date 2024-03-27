import Announce from '#models/announce'
import type { HttpContext } from '@adonisjs/core/http'
import { announceValidator } from '#validators/announce_validator'

export default class AnnounceController {
  async getAllAnnounces({ response }: HttpContext) {
    const announces = await Announce.all()
        return response.ok(announces)
  }

  async getOneAnnounce({ params, response }: HttpContext) {    
    const announce = await Announce.findByOrFail('user_id', params.id)
    return response.ok({
      message: `Announce for user ${params.id}`,
      announce: announce
    })
  }

  async createAnnounce({ params, request, response }: HttpContext) {
    await request.validateUsing(announceValidator)
    const announce = await Announce.updateOrCreate({ userId: params.id}, request.body())
    announce.save()
    return response.ok({
      message: `Announce for user ${params.id} has been created`
    })
  }

  async updateAnnounce({ params, request, response }: HttpContext) {
    await request.validateUsing(announceValidator)
    const announce = await Announce.updateOrCreate({ userId: params.id}, request.body())
    announce.merge(request.body())
    announce.save()
    return response.ok({
      message: `Announce for user ${params.id} has been updated`
    })
  }

  async deleteAnnounce({ params, auth, response }: HttpContext) {
    const user = await auth.authenticate()
    const announce = await Announce.findByOrFail("userId", params.id)
      if (announce.userId === user.id || user.userType === 'admin') {
        await announce.delete()
        return response.ok({
          message: `Announce for user ${params.id} has been deleted`,
        })
      }
  }
}
