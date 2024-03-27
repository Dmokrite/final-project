import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Practice from './practice.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class PracticeCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryName: string

  @hasMany(() => Practice)
  declare practices: HasMany<typeof Practice>
}
