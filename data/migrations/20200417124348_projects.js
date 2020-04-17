
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 255)
        .unique()
        .notNullable()
        .index();
      tbl.text('project_description', 255);
      tbl.boolean('project_status')
        .notNullable()
        .defaultTo(0);
    })
  .createTable('tasks', tbl => {
    tbl.increments();
      tbl.text('task_description', 255)
        .notNullable()
        .index();
      tbl.text('task_notes', 255);
      tbl.boolean('task_status')
        .notNullable()
        .defaultTo(0);
      tbl.string('project_id', 255)
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate('CASCADE');
    })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.text('resource_name', 255)
        .unique()
        .notNullable()
        .index();
    tbl.text('resource_description', 255);
  })
  .createTable('project_resources', tbl => {
    tbl.increments();
    tbl.string('project_id', 255)
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate('CASCADE');
    tbl.string('resource_id', 255)
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate('CASCADE');
    tbl.unique(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
