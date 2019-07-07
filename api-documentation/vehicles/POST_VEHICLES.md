# Vehicles Resources

    POST v1/public/vehicles

## Description
Create and return the new vehicle.

## Request Body

- **vehicle** _(required)_ — object
    - **name** _(required)_ — string
    - **capacity** _(required)_ — number
    - **owner** _(required)_ — string
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/authors

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e043d50"),
    "name": "Mercedes-Benz Sprinter 2019",
    "capacity": 20,
    "owner": "sa56ds456a456sda456asd",
    "...": ""
}
```