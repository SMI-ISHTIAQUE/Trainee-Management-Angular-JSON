import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTraineeComponent } from './component/add-trainee/add-trainee.component';
import { EditTraineeComponent } from './component/edit-trainee/edit-trainee.component';
import { ListTraineeComponent } from './component/list-trainee/list-trainee.component';
import { LoginTraineeComponent } from './component/login-trainee/login-trainee.component';
import { RegistrationTraineeComponent } from './component/registration-trainee/registration-trainee.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { PostsComponent } from './component/posts/posts.component';
import { FooterComponent } from './component/footer/footer.component';
import { CoursesComponent } from './component/courses/courses.component';
import { FaqComponent } from './component/faq/faq.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { EmployeeComponent} from './employee-listing/employee-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTraineeComponent,
    EditTraineeComponent,
    ListTraineeComponent,
    NotFoundComponent,
    LoginTraineeComponent,
    RegistrationTraineeComponent,
    HomepageComponent,
    AboutComponent,
    ContactUsComponent,
    PostsComponent,
    FooterComponent,
    CoursesComponent,
    FaqComponent,
    UserlistComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
