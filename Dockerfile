FROM node:12.7-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run ng build -- --prod --output-path=dist

FROM nginx:alpine
COPY --from=build /app/dist/freaks-website /usr/share/nginx/html

EXPOSE 4200
EXPOSE 80