import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.double('valor_total').notNullable()
      table
        .enum('status_pedido', ['Pendente', 'Pago', 'Enviado', 'Entregue', 'Cancelado'])
        .defaultTo('Pendente')
        .notNullable()
      table.integer('user_id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
