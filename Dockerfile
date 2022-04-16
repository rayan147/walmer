# pull nodejs runtime
FROM node:17.8.0
# create a dir to install the app
WORKDIR /app

COPY package*.json /app/

# install dependencies
RUN npm install

# copy the app to the /app directory
COPY . /app/

# expose the app port
EXPOSE 5000

CMD [ "node", "server.js" ]


