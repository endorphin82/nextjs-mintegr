FROM mhart/alpine-node:12
#FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

#RUN npm update
RUN npm run build
RUN rm -rf components pages styles lib redux

# Running the app
EXPOSE 3001
CMD [ "npm", "run", "start" ]