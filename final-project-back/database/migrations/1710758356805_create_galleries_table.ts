import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'galleries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.string('file_name')
      table.boolean('cover').defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}