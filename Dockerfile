FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY prisma/ .

RUN npm ci

COPY . .
