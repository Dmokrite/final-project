import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare genre: 'homme' | 'femme' | 'robot' | 'transgenre' | 'transexuel' | 'transformers'

  @column()
  declare orientation: 'hétéro' | 'homo' | 'pas difficile' | 'plug & play'

  @column()
  declare size: number

  @column()
  declare weight: number

  @column()
  declare penis_size: number

  @column()
  declare bra_cup: string

  @column()
  declare hairColor: string

  @column()
  declare eyeColor: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
