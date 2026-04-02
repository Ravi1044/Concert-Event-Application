export async function up(knex) {
  await knex.schema.createTable("concerts", (table) => {
    table.increments("id").primary();         // auto-incrementing PK
    table.string("name").notNullable();       // concert name
     table.string("artist").notNullable();     // performing artist
    table.string("venue").notNullable();      // venue name
    table.string("city").notNullable();       // city of the concert
    table.date("date").notNullable();         // concert date
    table.timestamp("created_at").defaultTo(knex.fn.now()); // timestamp
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("concerts");
}
