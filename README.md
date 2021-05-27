# Enterprise Materials Track

## Models

### User

| Property  |   Type   | Description |
| --------- | :------: | ----------- |
| \_id      |  string  |             |
| fullName  |  string  |             |
| email     |  string  |             |
| password  |  string  |             |
| isActive  | boolean  |             |
| createdAt | datetime |             |
| updatedAt | datetime |             |
| deletedAt | datetime |             |

### Material

| Property     |          Type           | Description |
| ------------ | :---------------------: | ----------- |
| \_id         |         string          |             |
| name         |         string          |             |
| description  |         string          |             |
| sku          |         string          |             |
| status       | 'broken\|used\|standBy' |             |
| category     |         string          |             |
| registeredBy |         string          |             |
| users        |      MaterialUser       |             |
| createdAt    |        datetime         |             |
| updatedAt    |        datetime         |             |
| deletedAt    |        datetime         |             |

### MaterialUser

| Property   |   Type   | Description |
| ---------- | :------: | ----------- |
| \_id       |  string  |             |
| userId     |  string  |             |
| assignedBy |  string  |             |
| note       |  string  |             |
| createdAt  | datetime |             |
| updatedAt  | datetime |             |
| deletedAt  | datetime |             |

## Routes

### User routes

```js
[
  {
    path: "user",
    routes: [
      {
        method: "GET",
        path: "/:id",
        description: "",
      },
      {
        method: "GET",
        path: "/",
        description: "current logged user",
      },
      {
        method: "POST",
        path: "/sing-in",
        body:{
            email: 'string',
            password: 'string',
        }
        description: "",
      },
      {
        method: "POST",
        path: "/sing-up",
        body:{
            email: 'string',
            password: 'string',
            fullName: 'string',
        }
        description: "",
      },
      {
        method: "PATCH",
        path: "/:id",
        body:{
            'email?': 'string',
            'password?': 'string',
            'fullName?': 'string',
        }
        description: "",
      },
    ],
  },
];
```
