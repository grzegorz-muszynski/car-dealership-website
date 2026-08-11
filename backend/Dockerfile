# --- Stage 1: build ---
FROM node:18-alpine AS build

# native deps needed to compile better-sqlite3.
# deliberately NOT installing vips-dev: sharp detects a system libvips and
# tries to build against it from source, which fails on Alpine/musl. Without
# it, sharp's installer falls back to its prebuilt musl binary instead.
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev python3

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

# --- Stage 2: runtime ---
FROM node:18-alpine

ENV NODE_ENV=production
WORKDIR /opt/app

COPY --from=build /opt/app ./

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
