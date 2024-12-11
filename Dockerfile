FROM node:18
# crear y configurar el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./

# Instalar las dependencias necesarias

RUN npm install

# Copiar el codigo fuente al directorio de trabajo

COPY . .

# Exporner el puerto de la aplicacion
EXPOSE 3000

# Comando para ejecutar la aplicacion
CMD ["node", "index.js"]


