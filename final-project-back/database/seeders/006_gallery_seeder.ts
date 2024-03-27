import Gallery from '#models/gallery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Gallery.createMany([
      {
        userId: 1,
        fileName: "Trouduc",
      },
      {
        userId: 2,
        fileName: "JeSuisDansLeGameEnClaquette",
      },
      {
        userId: 3,
        fileName: "photoDeBidulle",
      },
      {
        userId: 4,
        fileName: "photo4",
      },
      {
        userId: 5,
        fileName: "photo2",
      },
      {
        userId: 6,
        fileName: "photoPhoto",
      },
    ])
  }
}
