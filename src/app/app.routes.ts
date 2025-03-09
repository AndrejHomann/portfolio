import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component'; 
import { PrivacyComponent } from './privacy/privacy.component'; 
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'imprint/:language', title: 'Imprint', component: ImprintComponent }, 
    { path: 'privacy/:language', title: 'Privacy', component: PrivacyComponent }, 
    // { path: ':language', component: AppComponent },
    // { path: '', redirectTo: '/english', pathMatch: 'full' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}