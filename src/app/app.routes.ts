import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component'; 
import { PrivacyComponent } from './privacy/privacy.component'; 
import { TopComponent } from './top/top.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'top/:language', title: 'Top', component: TopComponent }, 
    { path: 'header/:language', title: 'Header', component: HeaderComponent }, 
    { path: 'about-me/:language', title: 'AboutMe', component: AboutMeComponent }, 
    { path: 'skills/:language', title: 'Skills', component: SkillsComponent }, 
    { path: 'projects/:language', title: 'Projects', component: ProjectsComponent }, 
    { path: 'contact/:language', title: 'Contact', component: ContactComponent }, 
    { path: 'imprint/:language', title: 'Imprint', component: ImprintComponent }, 
    { path: 'privacy/:language', title: 'Privacy', component: PrivacyComponent }, 
    
    // { path: ':language', component: AppComponent },
    // { path: '', redirectTo: '/english', pathMatch: 'full' } 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled', 
            scrollPositionRestoration: 'enabled' 
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}