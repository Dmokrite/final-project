import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Gallery extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare fileName: string

  @column()
  declare cover: boolean
}