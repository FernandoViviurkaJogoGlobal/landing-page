FROM node:18-alpine3.15 as build
WORKDIR /build
COPY package* ./
RUN npm i
COPY . ./
ARG VERSION
ENV VERSION=${VERSION}
RUN npm run build

FROM nginx:1.18.0-alpine
COPY --from=build /build/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
