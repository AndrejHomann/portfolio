import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(
  AppComponent, 
  { 
    ...appConfig, // Bestehende Konfiguration übernehmen
    providers: [
    ...appConfig.providers, // Bestehende Provider beibehalten
    provideAnimations()  
    ]
  }
)
.catch((err) => console.error(err));
