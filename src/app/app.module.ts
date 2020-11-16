import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Custom Modules
import { RoutesModule } from './modules/routes.module';
import { MaterialsModule } from './modules/materials.module';

// Services & Providers
import { SearchService } from './providers/search.service';
import { LoginService } from './providers/login.service';
import { ProfileService } from './providers/profile.service';

// Components
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MembersComponent } from './components/members/members.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NoticeComponent } from './components/notice/notice.component';
import { RoomsComponent } from './components/messages/rooms/rooms.component';
import { InboxComponent } from './components/messages/inbox/inbox.component';
import { MsgOptionsComponent } from './components/messages/msg-options/msg-options.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { AnalyzeComponent } from './components/dashboard/analyze/analyze.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/ui/page-not-found/page-not-found.component';
import { SpinnerCircleComponent } from './components/ui/spinner-circle/spinner-circle.component';
import { SpinnerLinearComponent } from './components/ui/spinner-linear/spinner-linear.component';
import { SavingsComponent } from './components/dashboard/savings/savings.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberLoginComponent } from './components/login/member-login/member-login.component';
import { ClientLoginComponent } from './components/login/client-login/client-login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditNoticeComponent } from './components/dashboard/edit-notice/edit-notice.component';
import { MemberComponent } from './components/members/member/member.component';
import { HelpsComponent } from './components/helps/helps.component';
import { HelpComponent } from './components/helps/help/help.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { NewPostComponent } from './components/home/posts/new-post/new-post.component';
import { SearchComponent } from './components/search/search.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { DialogComponent } from './components/ui/dialog/dialog.component';
import { GlobalFunctions } from './globals/functions';
import { GlobalVariables } from './globals/variables';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    ToolbarComponent,
    MembersComponent,
    ProfileComponent,
    MessagesComponent,
    NoticeComponent,
    RoomsComponent,
    InboxComponent,
    MsgOptionsComponent,
    AdminComponent,
    AnalyzeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SpinnerCircleComponent,
    SpinnerLinearComponent,
    SavingsComponent,
    RegisterComponent,
    MemberLoginComponent,
    ClientLoginComponent,
    NotificationComponent,
    DashboardComponent,
    EditNoticeComponent,
    MemberComponent,
    HelpsComponent,
    HelpComponent,
    PostsComponent,
    PostComponent,
    NewPostComponent,
    SearchComponent,
    EditProfileComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    // Custom Module
    RoutesModule,
    MaterialsModule
  ],
  providers: [
    GlobalFunctions,
    GlobalVariables,
    SearchService,
    LoginService,
    ProfileService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
