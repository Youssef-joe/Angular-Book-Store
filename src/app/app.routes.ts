import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './home/body/body.component';
import { AboutComponent } from './nav/about/about.component';
import { ServicesComponent } from './nav/services/services.component';
import { ContactComponent } from './nav/contact/contact.component';
import { ProductComponent } from './components/product/product.component';


export const routes: Routes = [
    {path: '', component:BodyComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product/:id', component: ProductComponent}
];
