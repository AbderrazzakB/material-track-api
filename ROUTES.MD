# Routes

## User

- GET /users
- GET /user/:id
- DELETE /user/:id
- POST /user/sign-up { email: string, password: string, fullName: string}
- POST /user/sign-in { email: string, password: string}
- POST /user { email?: string, password?: string, fullName?: string}
  - update user

## Material

- GET /materials
- GET /material/:id
- DELETE /material/:id
- POST /material {name: string; sku: string; category: string....}
