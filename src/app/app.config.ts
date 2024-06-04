// import { ApplicationConfig, importProvidersFrom , EnvironmentProviders, Provider} from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { HttpClientModule, provideHttpClient, withFetch ,HttpClient} from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// export const appConfig: ApplicationConfig = {
  
//   providers: [provideRouter(routes),provideHttpClient(withFetch()),importProvidersFrom(HttpClientModule)],
 

// };
import { ApplicationConfig, importProvidersFrom , EnvironmentProviders, Provider} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withFetch ,HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

 import { NgxSpinnerModule } from 'ngx-spinner';
export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes),provideHttpClient(withFetch()),importProvidersFrom(HttpClientModule),
  importProvidersFrom(TranslateModule.forRoot({
    loader:{
      provide:TranslateLoader,
      useFactory:httploaderfactory,
      deps:[HttpClient]
    }
  })),importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })),
  provideAnimations(),
  importProvidersFrom([BrowserAnimationsModule]),
  ]
};
export function httploaderfactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');

}
function provideAnimations(): Provider | EnvironmentProviders {
  return importProvidersFrom(BrowserAnimationsModule);
}
