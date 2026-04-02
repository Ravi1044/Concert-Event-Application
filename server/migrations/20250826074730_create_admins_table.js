export async function up(knex) {
  await knex.schema.createTable("admins", (table) => {
    table.increments("id").primary();         // auto-incrementing PK
    table.string("username").notNullable();    // admin name
    table.string("password").notNullable();    // admin password
       
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("admins");
}
