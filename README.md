# vanbora-api
Vabora api is a service for an app that connect people with alternative transports. This API includes CRUDs for: drivers, points, rides, users, and vehicles. This repository contains an endpoint for looking places or formmatted address powered by google place api too. The reason for this job is a hackaton powered by Uber.

## Database
This API connect with a mongoDB.
Your connection string is: <code>mongodb://vabora:v4nb0r4@cluster0-shard-00-00-ad4ob.mongodb.net:27017,cluster0-shard-00-01-ad4ob.mongodb.net:27017,cluster0-shard-00-02-ad4ob.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority</code>

## Endpoints

#### Drivers Resources

##### GET REGION
- **[<code>GET</code> v1/public/drivers/:driverId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/GET_DRIVERS_BY_ID.md)**
- **[<code>GET</code> v1/public/drivers/:driverId/rides](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/GET_DRIVERS_RIDES.md)**
- **[<code>GET</code> v1/public/drivers/:driverId/vehicles](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/GET_DRIVERS_VEHICLES.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/drivers/:driverId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/PUT_DRIVERS.md)**

##### POST REGION
- **[<code>POST</code> v1/public/drivers](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/POST_DRIVERS.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/drivers/:driverId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/drivers/DELETE_DRIVERS.md)**

#### Places Resources

##### GET REGION
- **[<code>GET</code> v1/public/places](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/places/GET_PLACES.md)**

#### Points Resources

##### GET REGION
- **[<code>GET</code> v1/public/points/:pointId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/points/GET_POINTS_BY_ID.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/points/:pointId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/points/PUT_USERS.md)**

##### POST REGION
- **[<code>POST</code> v1/public/points](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/points/POST_USERS.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/points/:pointId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/points/DELETE_POINTS.md)**

#### Rides Resources

##### GET REGION
- **[<code>GET</code> v1/public/rides](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/rides/GET_RIDES.md)**
- **[<code>GET</code> v1/public/rides/:rideId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/rides/GET_RIDES_BY_ID.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/rides/:rideId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/rides/PUT_RIDES.md)**

##### POST REGION
- **[<code>POST</code> v1/public/rides](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/rides/POST_RIDES.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/rides/:rideId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/rides/DELETE_RIDES.md)**

#### Users Resources

##### GET REGION
- **[<code>GET</code> v1/public/users](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/users/GET_USERS.md)**
- **[<code>GET</code> v1/public/users/:userId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/users/GET_USERS_BY_ID.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/users/:userId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/users/PUT_USERS.md)**

##### POST REGION
- **[<code>POST</code> v1/public/users](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/users/POST_USERS.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/users/:userId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/users/DELETE_USERS.md)**


#### Vehicles Resources

##### GET REGION
- **[<code>GET</code> v1/public/vehicles/:vehicleId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/vehicles/GET_VEHICLES_BY_ID.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/vehicles/:vehicleId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/vehicles/PUT_VEHICLES.md)**

##### POST REGION
- **[<code>POST</code> v1/public/vehicles](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/vehicles/POST_VEHICLES.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/vehicles/:vehicleId](https://github.com/lucashdp/vanbora-api/blob/master/api-documentation/vehicles/DELETE_VEHICLES.md)**


## Pre-Requisites

- NodeJS is a pre requisite.

## Install and Run this app

- Clone the project:
    git clone https://github.com/lucashdp/vanbora-api

- Execute the command line (install dependences):
    npm install

- Run the command line (run the app):
    npm start