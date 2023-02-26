import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTraineeComponent} from './component/add-trainee/add-trainee.component';
import {EditTraineeComponent} from './component/edit-trainee/edit-trainee.component';
import {ListTraineeComponent} from './component/list-trainee/list-trainee.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {LoginTraineeComponent} from './component/login-trainee/login-trainee.component';
import {RegistrationTraineeComponent} from './component/registration-trainee/registration-trainee.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {FooterComponent} from './component/footer/footer.component';
import {PostsComponent} from './component/posts/posts.component';
import {AboutComponent} from './component/about/about.component';
import {FaqComponent} from './component/faq/faq.component';
import {UserlistComponent} from './component/userlist/userlist.component';
import {ContactUsComponent} from './component/contact-us/contact-us.component';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
 { path:'', redirectTo: 'login-trainee', pathMatch:'full' },
{path: 'add', component:AddTraineeComponent},
{path: 'edit/:id', component:EditTraineeComponent},
{path: 'list', component:ListTraineeComponent},
{path: 'login', component:LoginTraineeComponent},
{path: 'register', component:RegistrationTraineeComponent},
{path: 'home', component:HomepageComponent},
{path: 'footer', component:FooterComponent},
{path: 'posts', component:PostsComponent},
{path: 'about', component:AboutComponent},
{path: 'faq', component:FaqComponent},
{path: 'users', component:UserlistComponent},
{path: 'contactus', component:ContactUsComponent},
{path: 'profile-view', component:EmployeeComponent},
{path: "**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
