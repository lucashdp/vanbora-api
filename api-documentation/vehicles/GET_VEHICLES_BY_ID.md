# Vehicles Resources

    GET v1/public/vehicles/:vehicleId

## Description
Returns the vehicle of reference id.

## Request Parameters

- **vehicleId** _(required)_ — string

***

## Example
**Request URI**

    http://localhost:8000/v1/public/vehicles/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e043d50"),
    "name": "Mercedes-Benz Sprinter 2019",
    "capacity": 20,
    "score": [5, 4, 5, 4, 3, 5, 5],
    "owner": "sa56ds456a456sda456asd",
    "...": ""
}
```