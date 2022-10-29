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

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm95c2FsIEFobW1lZCIsImVtYWlsIjoicG1mb3lzYWxAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcG1mb3lzYWwvZGF0YS9tYWluL2ltYWdlcy9wcm9maWxlLWNpcmNsZS0xOTJrYi5wbmciLCJpYXQiOjE2NjcwMjQ3NjEsImV4cCI6MTY5ODU2MDc2MX0.neFVTQaeEw-gm-rJugRYNmr7K1gdckfxKneJegRu4Po`

## Get New Access Token:

**API:** `POST` `https://pmstodo.onrender.com/token`
<br>
**Payload:**
```json
{
    "name": "Foysal Ahmmed",
    "email": "pmfoysal@gmail.com",
    "image": "https://raw.githubusercontent.com/pmfoysal/data/main/images/profile-circle-192kb.png"
}
```
**Response:**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm95c2FsIEFobW1lZCIsImVtYWlsIjoicG1mb3lzYWxAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcG1mb3lzYWwvZGF0YS9tYWluL2ltYWdlcy9wcm9maWxlLWNpcmNsZS0xOTJrYi5wbmciLCJpYXQiOjE2NjcwMjQ3NjEsImV4cCI6MTY5ODU2MDc2MX0.neFVTQaeEw-gm-rJugRYNmr7K1gdckfxKneJegRu4Po"
}
```
