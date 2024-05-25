import { ApplicationConfig, importProvidersFrom , EnvironmentProviders, Provider} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withFetch ,HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes),provideHttpClient(withFetch()),importProvidersFrom(HttpClientModule)],
 

};
