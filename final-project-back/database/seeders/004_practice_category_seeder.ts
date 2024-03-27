import PracticeCategory from '#models/practice_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await PracticeCategory.createMany([
      {
        categoryName: 'massage',
      },
      {
        categoryName: 'preliminary',
      },
      {
        categoryName: 'intimate',
      },
      {
        categoryName: 'fetish',
      },
      {
        categoryName: 'other',
      },
      {
        categoryName: 'disability',
      },
    ])
  }
}
