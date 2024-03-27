import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_profiles'

  async up() {
    this.schema.raw('DROP TYPE IF EXISTS "user_profile_orientation" CASCADE')
    this.schema.raw('DROP TYPE IF EXISTS "user_profile_genre" CASCADE')
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.enum('genre', ['homme', 'femme', 'robot', 'transgenre', 'transexuel', 'transformers'], {
        useNative: true,
        enumName: 'user_profile_genre',
      })
      .notNullable()
      table
        .enum('orientation', ['hétéro', 'homo', 'pas difficile', 'plug & play'], {
          useNative: true,
          enumName: 'user_profile_orientation',
        })
        .notNullable()
      table.integer('size').nullable()
      table.integer('weight').nullable()
      table.integer('penis_size').nullable()
      table.string('bra_cup').nullable()
      table.string('hair_color').nullable()
      table.string('eye_color').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "user_profile_orientation" CASCADE')
    this.schema.raw('DROP TYPE IF EXISTS "user_profile_genre" CASCADE')
    this.schema.dropTable(this.tableName)
  }
}
