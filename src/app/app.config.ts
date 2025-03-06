import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import HttpClientModule if you plan to use HTTP requests
import { MatButtonModule } from '@angular/material/button'; // Angular Material Button
import { MatSelectModule } from '@angular/material/select'; // Angular Material Select dropdown

import { ImageConverterComponent } from './image-converter/image-converter.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync() , provideHttpClient() , importProvidersFrom(BrowserModule, FormsModule , HttpClientModule , MatButtonModule , MatSelectModule , NgModule )]
};
