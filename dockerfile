FROM node:12

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

RUN npm install
RUN npm run build

COPY src/config/cert.pem /app/dist/config/
COPY src/config/key.pem /app/dist/config/

# check files list
RUN ls -a

EXPOSE 3000

CMD [ "node", "dist/server.js" ]

## BUILD DOCKER INSTRUCTIONS
#
# Build docker statment
# docker build -t adidas-observer .
#
# Build run statment with environment variables
# docker run --detach --env-file=.env -p 49160:3000 --name adidas adidas-observer
#
