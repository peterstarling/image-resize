FROM node:8

ENV NODE_ENV development
ADD package.json /var/www/image-resize/

WORKDIR /var/www/image-resize/

RUN npm install

CMD ["npm", "start"]