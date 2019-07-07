# Drivers Resources

    GET v1/public/drivers/:driverId/vehicles

## Description
Returns the vehicles of the driver of reference id.

## Request Parameters

- **driverId** _(required)_ — string

***

## Example
**Request URI**

    http://localhost:8000/v1/public/drivers/5bb0e04a7ca1951a9cb23d50/vehicles

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e043d50"),
        "name": "Mercedes-Benz Sprinter 2019",
        "capacity": 20,
        "score": [5, 4, 5, 4, 3, 5, 5],
        "...": "",
        "owner": "5bb0e04a7ca1951a9cb23d50",
    },
    {
        "_id": ObjectId("7770e048950"),
        "name": "Ford Transit",
        "capacity": 14,
        "score": [5, 4, 2, 2, 3, 3, 5],
        "...": "",
        "owner": "5bb0e04a7ca1951a9cb23d50",
    }
]
```