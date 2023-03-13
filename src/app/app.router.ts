import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './common/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { EmployeeComponent } from './Module/employee/employee.component';
import { Login2Component } from './common/login2/login2.component';
import { AuthguardGuard } from './shared/authguard.guard';

export const router: Routes = [
    {path: '', component: Login2Component},
    {path: 'login', component: LoginComponent},
    {path: 'login2', component: Login2Component},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'employee', component: EmployeeComponent, canActivate:[AuthguardGuard]},


];

export const routes = RouterModule.forRoot(router);