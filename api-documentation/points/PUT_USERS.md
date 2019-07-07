# Points Resources

    PUT v1/public/points/:pointId

## Description
Edit and return the point of reference id.

## Request Parameters

- **pointId** _(required)_ — string

## Request Body

- **point** _(required)_ — object
    - **user** _(required)_ — string
    - **ride** _(required)_ — string
    - **origin** _(required)_ — object
        - **coordinates** - array of numbers
    - **whither** _(required)_ — object
        - **coordinates** - array of numbers
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    http://localhost:8000/v1/public/points/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "user": "5d56as56asd56sda5",
    "ride": "5dssd56sda5",
    "origin": {
        "coordinates": [-19.9399234, -43.9803957]
    },
    "whither": {
        "coordinates": [-19.9399234, -43.9803957]
    },
    "...": ""
}
```