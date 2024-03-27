import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Practice extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare practiceCategoryId: number

  @column()
  declare practiceName: string
}
