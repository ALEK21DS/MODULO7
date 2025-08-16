# Usa una imagen de Node.js (versión 18 en Alpine, más ligera)
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install -g @angular/cli \
    && npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto 4200 (Angular por defecto)
EXPOSE 4200

# Ejecuta Angular en primer plano
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
