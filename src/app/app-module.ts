import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { Weather } from './weather/weather';
import { provideRouter } from '@angular/router';
import { ChangeFontSize } from './change-font-size';
import { BoldText } from './bold-text';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Home,
    TextEditor,
    ChangeFontSize,
    BoldText
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Weather,
    Calculator
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
