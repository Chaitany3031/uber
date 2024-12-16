# User Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. Upon successful registration, the user will receive a JSON Web Token (JWT) for authentication.

## Request Body
The request body must be in JSON format and should include the following fields:

- `fullname`: An object containing the user's full name.
  - `firstname`: (string, required) The first name of the user. Must be at least 2 characters long.
  - `lastname`: (string, optional) The last name of the user.
- `email`: (string, required) The email address of the user. Must be a valid email format and unique.
- `password`: (string, required) The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}