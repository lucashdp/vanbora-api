# Drivers Resources

    GET v1/public/drivers/:driverId

## Description
Returns the driver of reference id.

## Request Parameters

- **driverId** _(required)_ — string

***

## Example
**Request URI**

    http://localhost:8000/v1/public/drivers/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Caio Pereira",
    "score": [5, 4, 5, 4, 3, 5, 5]
    "...": ""
}
```