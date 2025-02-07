# Usa una imagen de Node para el entorno de desarrollo
FROM node:20.18.1-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli@19

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto que Angular usa por defecto (4200)
COPY . .

# Expone el puerto 4200 (por defecto, ng serve utiliza ese puerto)
EXPOSE 4200

# Comando para iniciar el servidor de desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
