FROM node:16

WORKDIR /hellojsapp
COPY package*.json /hellojsapp/
RUN npm install --unsafe-perm
COPY . /hellojsapp/

EXPOSE 7071
CMD npm start