# Proyecto Node.js con Docker y MySQL

Este proyecto es una aplicación Node.js que utiliza Express para crear una API REST y MySQL como base de datos. La aplicación se ejecuta en contenedores Docker.

## Requisitos

- Docker
- Docker Compose

## Configuración del proyecto

### Clonar el repositorio

Para clonar el repositorio, ejecuta el siguiente comando:

```sh
git clone https://github.com/yanditv/server-nodejs.git
cd server-nodejs
```

### Instalación de las dependencias

### Instalación de las dependencias

Para instalar las dependencias, ejecuta el siguiente comando:

```sh
npm install
```

### Compilar el proyecto

Para compilar el proyecto, ejecuta el siguiente comando:

```sh
docker-compose build
```

### Levantar los servicios

Para levantar los servicios, ejecuta el siguiente comando:

```sh
docker-compose up -d
```

### Recrear la aplicación

Si necesitas recrear la aplicación, ejecuta el siguiente comando:

```sh
docker-compose up -d --force-recreate
```

### Despliegue

la aplicacion estará disponible en
http://localhost:3000

## Endpoints de la API

### Obtener todos los usuarios

```http
GET /api/usuarios
```

### Crear un nuevo usuario

```http
POST /api/usuarios
```

Ejemplo de body

```json
{
  "nombre": "Juan Carlos",
  "apellido": "Mercado Piedra",
  "edad": 34
}
```

### Obtener un usuario por ID

## Estructura del proyecto

- `index.js`: Archivo principal de la aplicación.
- `db.js`: Configuración de la conexión a la base de datos.
- `init.sql`: Script SQL para inicializar la base de datos.
- `Dockerfile`: Archivo de configuración de Docker para la aplicación Node.js.
- `docker-compose.yml`: Archivo de configuración de Docker Compose.
- `package.json`: Archivo de configuración de npm.
- `.gitignore`: Archivo para ignorar archivos y carpetas en Git.

## Notas

- La base de datos se inicializa automáticamente con el script `init.sql` cuando se levanta el contenedor de MySQL.
- La aplicación se ejecuta en el puerto 3000.
- Procure tener disponible el puerto 3306 donde se ejecuta la base de datos, ya que se puede generar conflictos.

## Autor

- Junior Leonardo Wachapa Yankur

## Practica

Realizar un informe sobre la practica realizada
