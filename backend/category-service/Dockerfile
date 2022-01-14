FROM node

WORKDIR /app

COPY . . 


# Run all packages while creating the image
RUN npm install

EXPOSE 4000

#run the server when container gets executed
CMD node server.js