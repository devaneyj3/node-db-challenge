
exports.up = function (knex) {
    return knex.schema.createTable('Project', tbl => {
        tbl.increments()
        tbl.text('Name')
            .notNullable()
            .unique()
        tbl.text('Description')
        tbl.boolean('Completed')
            .notNullable()
            .defaultTo(false)
    })
        .createTable('Resource', tbl => {
            tbl.increments()
            tbl.text('name')
                .notNullable()
                .unique()
            tbl.text('Description')
        })
        .createTable('Task', tbl => {
            tbl.increments()
            tbl.text('Description')
                .notNullable()
            tbl.text('Notes')
            tbl.boolean('Completed')
                .notNullable()
                .defaultTo(false)
            tbl.integer('Project_ID')
                .unsigned()
                .references('id')
                .inTable('Project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('Project_Resource', tbl => {
            tbl.integer('Resource_ID')
                .unsigned()
                .references('id')
                .inTable('Resource')
            tbl.integer('Project_ID')
                .unsigned()
                .references('id')
                .inTable('Project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.primary(['Resource_ID', 'Project_ID']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Project_Resource')
        .dropTableIfExists('Task')
        .dropTableIfExists('Resource')
        .dropTableIfExists('Project');
};
