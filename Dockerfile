# Use a imagem oficial do Node.js como base
FROM node:14

# Crie um diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Exponha a porta em que o aplicativo irá funcionar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]