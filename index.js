const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())


app.get('/api/usuarios', function (req, res) {
    const query = 'select * from usuarios'
    db.query(query, (error, result) => {
        if (error) {
            console.error(error)
            res.status(500).json({ error: error })
        }
        res.json(result)
    })
})

app.post('/api/usuarios', function (req, res) {
    const { nombre, apellido, edad } = req.body
    let user = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
    const query = 'insert into usuarios (nombre,apellido,edad) values(?,?,?)'
    db.query(query, [user.nombre, user.apellido, user.edad], (error, result) => {
        if (error) {
            console.error(error)
            res.status(500).json({ error: error })
        }
        res.status(200).json({ message: 'registro almacenado con éxito', data: result })
    })
})

// rutas para productos

app.get('/api/usuarios/:id', function (req, res) {
    res.json({})
})

app.listen(3000, function () {
    console.log('la aplicación está ejecutandose en el puerto 3000!')
})