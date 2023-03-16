# Todoapp - A Simple & Modern Todo Application!

TodoApp - A Simple & Modern Aesthetic Todo Application Design & Developed using ReactJS! Live: https://pmstodo.netlify.app/

## Description of This Website:

-  Users can add todos with specify the completion date.
-  Users can add todos with selecting a specific tag.
-  Users can edit, view and delete their todos.
-  Users can see today, upcoming, overdue and archived todos.
-  Users can see their tag specific todos.
-  Admins can see the statistics and all listed todos.

## Technologies used on This Website:

-  Languages: HTML, CSS, JavaScript;
-  Library/Framework: ReactJS, Styled Components, SASS, React Query;
-  Features: HTML5, CSS3, ES6, Context API, Custom Hook, Service Worker.
-  Routing: React Router DOM, Dynamic Route, Private Route, Nested Route;
-  Authentication: None;
-  Authorization: JSON Web Token (JWT);
-  Source Control: Git & GitHub;
-  Hosting: Render & Netlify;
-  Server: NodeJS, ExpressJS;
-  Database: MongoDB;
-  Package Manager: Yarn;
-  Bundler: Webpack 5;

## Default Access Token:

```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUnViZW4gSGVuZGVyc29uIiwiZW1haWwiOiJydWJlbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi80NC5qcGciLCJpYXQiOjE2Nzg5ODcyNzgsImV4cCI6MTcxMDUyMzI3OH0.dxGLn0Pm1GU0mMsuSDmH63y8k6l1tJPvHkRtUMkD1Ck```

## Get New Access Token:

**API:** `POST` `https://pmstodo-1-m0244492.deta.app/token`
<br>
**Payload:**
```json
{
    "name": "Your Name",
    "email": "Your Email ID",
    "image": "Your Image URL"
}
```
**Response:**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUnViZW4gSGVuZGVyc29uIiwiZW1haWwiOiJydWJlbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi80NC5qcGciLCJpYXQiOjE2Nzg5ODcyNzgsImV4cCI6MTcxMDUyMzI3OH0.dxGLn0Pm1GU0mMsuSDmH63y8k6l1tJPvHkRtUMkD1Ck"
}
```
