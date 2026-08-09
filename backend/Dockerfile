# --- Stage 1: build ---
FROM node:18-alpine AS build

# native deps needed to compile better-sqlite3 and Strapi's image processing (sharp)
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev python3

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

# --- Stage 2: runtime ---
FROM node:18-alpine

RUN apk add --no-cache vips-dev

ENV NODE_ENV=production
WORKDIR /opt/app

COPY --from=build /opt/app ./

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
