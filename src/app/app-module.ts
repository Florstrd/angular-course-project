import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { Weather } from './weather/weather';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    App,
    Home,
    Calculator,
    TextEditor,
    Weather
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ],
  bootstrap: [App]
})
export class AppModule { }
