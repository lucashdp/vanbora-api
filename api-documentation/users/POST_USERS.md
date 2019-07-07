# Users Resources

    POST v1/public/users

## Description
Create and return the new user.

## Request Body

- **user** _(required)_ — object
    - **name** _(required)_ — string
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/users

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "João Pereira",
    "...": ""
}
```