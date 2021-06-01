FROM node:12.7-alpine AS build
WORKDIR /app
EXPOSE 4200
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/freaks-website /usr/share/nginx/html

