module.exports = {
    development:{
        HOST: 'localhost',
        USER: 'postgres',
        PASSWORD: 'CoffeePhone123',
        DB: 'meal_prep_test',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production:{
        HOST: 'localhost',
        USER: 'postgres',
        PASSWORD: 'CoffeePhone123',
        DB: 'meal_prep_prod',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        use_env_variable: "DATABASE_URL"
    }
};