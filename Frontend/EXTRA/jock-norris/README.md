# New Pages

ng generate component pages/home-page
ng g c pages/categories-page

# Paths that point to the pages

Inside app-routing.module.ts
const routes: Routes = [ { path: 'home', component: HomePageComponent }, { path: 'categories', component: CategoriesPageComponent }, ];

# Data flows

Data <-> Service <-> Component <-> Template

# Service creation

ng g s apis/chuck

# Data <-> Service

## HTTP exchanges

AppModule Enable the HTTP Client requests
In the app.module.ts :
import { HttpClientModule } from '@angular/common/http';
Add HttpClientModule in the imports array

## Make the HTTP request from the Service

In the chuck.service.ts
Chuck Service use the constructor to have a private http connection
We define the function getRndJoke().
This function will take time to retreive the data.
Therefor, it's a promise with async/await keywords.
This function use the private http connection to make a GET request on the API.

# Service <-> Component

You just include the service in your constructor.
And then use it.

# Component <-> Template

{{Data Binding}}
