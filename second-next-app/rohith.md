HTTP Status Codes:

HTTP status codes tell the client what happened with the request.

| Code    | Meaning      | Example               |
| ------- | ------------ | --------------------- |
|   200   | Success      | Student fetched       |
|   201   | Created      | Student created       |
|   400   | Bad Request  | Invalid data          |
|   404   | Not Found    | Student doesn't exist |
|   500   | Server Error | Server/database error |

/api/students/100

├── app/
│   ├── api/
│   │   └── status/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts

GET /api/students/1
→ 200 OK
-------------------------
GET /api/students/100
→ 404 Not Found
-------------------------
POST /api/students

{
  "name": "Rohit",
  "age": 21,
  "course": "CSE"
}
→ 201 Created
-------------------------
POST /api/students

{
  "age": 21
}
→ 400 Bad Request
-------------------------
DELETE /api/students
→ 500 Internal Server Error
---------------------------
