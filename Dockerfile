# Usa una imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .
# Ejecuta los tests
RUN npm test

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]