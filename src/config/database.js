// p.s.: You should use CommomJS.
// Thats because, this file will be use by ".sequelize"
// and "sequelize" just use "CommonJS" :)

module.exports = {
    
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}