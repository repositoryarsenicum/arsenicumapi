module.exports = {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ["dist/**/*.model.js"],
    migrations: ["dist/migration/*.js"],
    cli: {
        migrationsDir: "src/migration"
    }
}