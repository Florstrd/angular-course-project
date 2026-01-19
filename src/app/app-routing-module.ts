import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { Weather } from './weather/weather';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "calculator", component: Calculator },
  { path: "text-editor", component: TextEditor },
  { path: "weather", component: Weather}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
