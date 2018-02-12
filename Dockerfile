FROM node:8.9.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# COPY yarn.lock .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN yarn
RUN yarn run build

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]