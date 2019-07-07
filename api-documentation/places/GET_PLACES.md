# Places Resources

    GET v1/public/places

## Description
Returns a list of places.

## Request Query

- **searchText** _(required)_ — string

## Example
**Request URI**

    http://localhost:8000/v1/public/places?searchText=rua%20antonio%20dias

**Request Response**
``` json
[
    {
        "formatted_address" : "Rua Antônio Dias, Belo Horizonte - MG, Brasil",
        "geometry" : {
            "location" : {
               "lat" : -33.8750460,
               "lng" : 100.2052720
            }
        }
    },
    {
        "formatted_address" : "Rua Antônio Dias, Porto Alegre - RS, Brasil",
        "geometry" : {
            "location" : {
               "lat" : -35.8750460,
               "lng" : 101.2052720
            }
        }
    }
]
```