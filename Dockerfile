# What image do you want to start building on?
FROM  node:12.3.1


# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app


# Tell your container where your app's source code will live
WORKDIR  /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

ENV PORT 3080

# Does your app have any dependencies that should be installed?
RUN npm i

RUN npm run prod-webpack

# What port will the container talk to the outside world with once created?
EXPOSE 3080

# How do you start your app?
CMD ["npm", "run", "prod-start"]