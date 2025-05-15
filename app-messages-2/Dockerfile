FROM node:18-alpine

WORKDIR /app-messages-2

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV production
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]