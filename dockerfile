# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /exommerce-caratungu

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main"]
