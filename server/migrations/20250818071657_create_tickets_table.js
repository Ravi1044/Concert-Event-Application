export async function up(knex) {
  await knex.schema.createTable("tickets", (table) => {
    table.increments("id").primary();
    table.string("ticket_type").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("concert_id").unsigned().notNullable()
      .references("id").inTable("concerts").onDelete("CASCADE");
    table.integer("alloted_tickets").unsigned().notNullable().defaultTo(0);
    table.integer("sold_tickets").unsigned().notNullable().defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("tickets");
}
