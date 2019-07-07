# Users Resources

    PUT v1/public/users/:userId

## Description
Edit and return the user of reference id.

## Request Parameters

- **userId** _(required)_ — string

## Request Body

- **user** _(required)_ — object
    - **name** _(required)_ — string
    - **score** _(optional)_ — array of numbers 
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/users/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "João Pereira",
    "score": [5, 4, 5, 4, 3, 5, 5]
    "...": ""
}
```