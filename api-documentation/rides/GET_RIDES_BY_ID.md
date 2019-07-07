# Rides Resources

    GET v1/public/rides/:rideId

## Description
Returns the ride of reference id.

## Request Parameters

- **rideId** _(required)_ — string

***

## Example
**Request URI**

    http://localhost:8000/v1/public/rides/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e043d50"),
    "description": "Estação Vilarinho para Pedro Leopoldo",
    "vehicle": "as5d1sa56dsa",
    "usersInRide": ["gf55gd5g5dfg", "d5sf5sd666s6", "9sa99sa9sa9"],
    "origin": {
        "coordinates": [-19.9399234, -43.9803957]
    },
    "whither": {
        "coordinates": [-19.9399234, -43.9803957]
    },
    "start": "2019-03-31T20:00:00.000Z",
    "driver": "5bb0e04a7ca1951a9cb23d50",
    "price": 20,
    "...": ""
}
```