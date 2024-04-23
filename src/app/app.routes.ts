import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';

export const routes: Routes = [
   {path: '', redirectTo: '/Home', pathMatch: 'full'},
   {path: 'SingleProduct', redirectTo: '/Product/SingleProduct', pathMatch: 'full'},
   {path: 'Signup', redirectTo: '/login/Signup', pathMatch: 'full'},
  { 'path': 'Home','title':'Home', component: HomeComponent },
  { 'path': 'About', 'title': 'About', component: AboutComponent },
  { 'path': 'Product', 'title': 'Product', component: ProductComponent },
  {
    'path': 'Product', children: [
      { 'path': 'SingleProduct','title': 'SingleProduct', component: SingleProductComponent }
    ]

  },

   { 'path': 'login', 'title': 'login', component: LoginComponent },
  {
    'path': 'login', children: [
      { 'path': 'Signup','title': 'Signup', component: SignupComponent }
    ]

  },
  { 'path': 'Contact','title':'Contact', component: ContactComponent },
  {
        path: 'Product/SingleProduct/:id', title: 'SingleProduct Details Page', component: SingleProductComponent,
  },
   { 'path': '**', component: PageNotFoundComponent },
];
