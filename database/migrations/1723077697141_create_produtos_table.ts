import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.double('preco').notNullable()
      table.integer('quantidade').notNullable()
      table.string('imagem').notNullable()

      table.integer('categoria_id').notNullable() //.references('id').inTable('categorias')
      table.integer('marca_id').notNullable() //.references('id').inTable('marcas')

      //table.foreign('categoria_id').references('categorias.id')
      //table.foreign('marca_id').references('marcas.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
