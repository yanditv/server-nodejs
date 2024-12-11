const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'web_movil',
        port: 3306
    }
)

db.connect((error) => {
    if (error) {
        console.error('Error, no se pudo realizar la conexión')
        throw error;
    }
    console.log('conexión establecida con la base de datos')
})

module.exports = db;