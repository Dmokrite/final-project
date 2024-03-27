import PracticeCategory from '#models/practice_category'
import type { HttpContext } from '@adonisjs/core/http'

export default class PracticesController {
  async getAllPractices({ response }: HttpContext) {
    const practiceList = await PracticeCategory.query().preload('practices')
    response.ok({
      practiceList,
    })
  }
}
