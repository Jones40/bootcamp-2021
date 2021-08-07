# Exercice Page

https://www.notion.so/AJAX-Documentation-db2b8f3a69d74994af5e95d93385b998#6c514671a4454b28b03aef4390e74987

# Rooms Pages

1. Generate the rooms-page component
   ng g c pages/rooms-page
2. I need a routing so that /rooms shows that component.
   In the "routes" of the app-routing.module
   { path: 'rooms', component: RoomsPageComponent }
3. Rooms data are in the server API. I need to create a SERVICE
   ng g s apis/rooms
4. Make the call. (http requests..)
   async/await http.get(url).toPromise()
5. Use the service in the Component in NgOnInit

# Make the other pages + routing + CSS :

- Home Page with 2 links : Register , Log in
- Register Page
- Log in Page
- Chat Page
- Create Room Page

# TODO

[v] - redirect to Home page first
[v] - After register/login , redirect to room
[] - click on the room, redirect to the corresponding chat
[] - Chat room - list message from a room
[] - After register/login ,Store hash
[] - Send message feature
[] - CSS Rooms List
[] - CSS home page
[] - CSS register
[] - CSS login
