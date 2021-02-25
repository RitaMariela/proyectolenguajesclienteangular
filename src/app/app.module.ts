import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table' 
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';

import { IssueListComponent } from './issue-list/issue-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { SeeDetailsComponent } from './see-details/see-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCommentComponent } from './add-comment/add-comment.component';
const appRoutes: Routes =[
  {
    path: 'issues',
    component: IssueListComponent,
    data: { title: 'Issue List' }

  },
  {
    path: 'user',
    component: AddUserComponent,
    data: { title: 'Add user' }

  },
  {
    path: 'addComment/:issueCode',
    component: AddCommentComponent,
    data: { title: 'Add Comment' }

  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'details/:issueCode',
    component: SeeDetailsComponent,
    data: { title: 'Issue Details' }
  },
  {
    path: 'details',
    component: SeeDetailsComponent,
    data: { title: 'Details' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    LoginComponent,
    AddUserComponent,
    SeeDetailsComponent,
    AddCommentComponent 
    
  ],
  imports: [
     RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }