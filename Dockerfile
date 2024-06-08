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
# Variable de entorno para controlar si se ejecutan los tests
ENV RUN_TESTS=true

# Ejecuta los tests si la variable de entorno lo indica
RUN if [ "$RUN_TESTS" = "true" ]; then \
        npm test & \
        TEST_PID=$!; \
        wait $TEST_PID; \
        if [ $? -ne 0 ]; then \
            echo "Tests failed, exiting build."; \
            kill -s INT $TEST_PID; \
            exit 1; \
        fi \
    fi

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]