# Drivers Resources

    PUT v1/public/drivers/:driverId

## Description
Edit and return the driver of reference id.

## Request Parameters

- **driverId** _(required)_ — string

## Request Body

- **driver** _(required)_ — object
    - **name** _(required)_ — string
    - **score** _(optional)_ — array of numbers 
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/drivers/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Caio Ribeiro Pereira",
    "score": [5, 4, 5, 4, 3, 5, 5]
    "...": ""
}
```