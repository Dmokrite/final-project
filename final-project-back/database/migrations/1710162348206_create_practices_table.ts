import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('practice_name', 40)
      table.integer('practice_category_id').unsigned().references('practice_categories.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
