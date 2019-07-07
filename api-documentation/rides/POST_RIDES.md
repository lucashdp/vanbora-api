# Rides Resources

    POST v1/public/rides

## Description
Create and return the new ride.

## Request Body

- **ride** _(required)_ — object
    - **description** _(required)_ — string
    - **origin** _(required)_ — object
        - **coordinates** - array of numbers
    - **whither** _(required)_ — object
        - **coordinates** - array of numbers
    - **vehicle** _(required)_ — string
    - **usersInRide** _(required)_ — array of string
    - **start** _(required)_ — string
    - **driver** _(required)_ — string
    - **price** _(required)_ — number
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/rides

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