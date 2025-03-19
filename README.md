# Node.js APIs for School Management

Base URL: https://school-api-wu6c.onrender.com

## Postman API Reference

### Get School Lists

```http
  GET https://school-api-wu6c.onrender.com/schools/listschools?latitude=12.9716&longitude=77.5946

```

| Method | Description         |
| :----- | :------------------ |
| `Get`  | Retrieve all School |

#### Example

```
  {
        "id": 1,
        "name": "Springfield Academy",
        "address": "456 Avenue, City",
        "latitude": 13,
        "longitude": 77.6,
        "createdAt": "2025-03-19T10:40:12.000Z",
        "updatedAt": "2025-03-19T10:40:12.000Z",
        "distance": 3.211681360403747
    }
```

### Add a New School

```http
  POST https://school-api-wu6c.onrender.com/schools/addschool

```

| Method | Description      |
| :----- | :--------------- |
| `POST` | Add a new School |

#### Example

```
{
  "name": "Greenwood High",
  "address": "123 Street, City",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```
