import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from '../components/home/home.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { MembersComponent } from '../components/members/members.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AdminComponent } from '../components/dashboard/admin/admin.component';
import { AnalyzeComponent } from '../components/dashboard/analyze/analyze.component';
import { PageNotFoundComponent } from '../components/ui/page-not-found/page-not-found.component';
import { SavingsComponent } from '../components/dashboard/savings/savings.component';
import { RegisterComponent } from '../components/register/register.component';
import { ClientLoginComponent } from '../components/login/client-login/client-login.component';
import { MemberLoginComponent } from '../components/login/member-login/member-login.component';
import { LoginComponent } from '../components/login/login.component';
import { NoticeComponent } from '../components/notice/notice.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EditNoticeComponent } from '../components/dashboard/edit-notice/edit-notice.component';
import { MemberComponent } from '../components/members/member/member.component';
import { HelpsComponent } from '../components/helps/helps.component';
import { HelpComponent } from '../components/helps/help/help.component';
import { InboxComponent } from '../components/messages/inbox/inbox.component';
import { PostComponent } from '../components/post/post.component';
import { SearchComponent } from '../components/search/search.component';
import { EditProfileComponent } from '../components/profile/edit-profile/edit-profile.component';
import { DialogComponent } from '../components/ui/dialog/dialog.component';

const Routing: Routes = [

  // Home Routes
  {path: '', component: HomeComponent, children: [
    {path: 'd', component: DialogComponent, children: [
      {path: 'notice/:noticeid', component: DialogComponent}
    ]},
  ]},

  // Post Routes
  {path: 'post/:postid', component: PostComponent},

  // Messages Routes
  {path: 'messages', component: MessagesComponent, children: [
    {path: ':roomid', component: InboxComponent}
  ]},

  // Members Routes
  {path: 'members', component: MembersComponent, children: [
    {path: ':userid', component: MemberComponent}
  ]},

  // Profile Routes
  {path: 'profile', children: [
    {path: '', pathMatch: 'full', redirectTo: 'me'},
    {path: ':userid', component: ProfileComponent, children: [
      {path: 'edit', component: EditProfileComponent}
    ]}
  ]},

  // Notices Routes
  {path: 'notices', component: NoticeComponent},

  // Search Routes
  {path: 'search', component: SearchComponent},

  // Activity Routes
  {path: 'activities', component: NotificationComponent},

  // Admin Routes
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'admin'},
    {path: 'admin', component: AdminComponent},
    {path: 'analyze', component: AnalyzeComponent},
    {path: 'notice', component: EditNoticeComponent},
    {path: 'savings', component: SavingsComponent}
  ]},

  // Login Routes
  {path: 'login', component: LoginComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'client'},
    {path: 'client', component: ClientLoginComponent},
    {path: 'member', component: MemberLoginComponent}
  ]},

  // Register Routes
  {path: 'register', component: RegisterComponent},
  {path: 'help', component: HelpsComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'welcome'},
    {path: ':helpid', component: HelpComponent}
  ]},

  // 404 Routes
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routing)
  ],
  exports: [RouterModule],
  declarations: []
})

export class RoutesModule { }
