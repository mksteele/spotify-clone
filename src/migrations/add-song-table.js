// TODO: This code is not run since I haven't initialized a database,
// but the migration should show the database schema proposed for songs.
exports.up = async function (knex) {
  await knex.schema.createTable("song", (t) => {
    t.specificType("id", "char(32)").primary();

    // TODO - Index on Title and Artist?, but will want
    t.string("title", 256).notNullable();
    t.string("artist", 256).notNullable();
    t.integer("trackDurationInMillis", 256).notNullable();
    // Allow nullable to be able to store a song before the file is fully uploaded
    t.string("filename", 256).nullable();

    // TODO - even lower precision? Release dates are just calendar dates
    t.dateTime("release_date", { precision: 3 }).nullable();
    // TODO refer to a known genres table
    t.string("genres", 256).nullable();
  });
};

exports.down = async function down(knex) {
  return knex.schema.dropTable("song");
};
