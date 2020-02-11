npm install --save font-awesome angular-font-awesome

npm install @fortawesome/free-brands-svg-icons

$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons



=======================A referenced quick tutorial for using fa icons==================================
Using NPM

$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
// See Compatibility table below to choose a correct version
$ npm install @fortawesome/angular-fontawesome@<version>

---------------------------------------

E.g. 0.6.x	is 9.x	supported


---------------------------------------
Usage

To get up and running using Font Awesome with Angular follow below steps:

Add FontAwesomeModule to imports in src/app/app.module.ts:

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

----------------------------------------------------------

Tie the icon to the property in your component src/app/app.component.ts:

import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}

------------
Use the icon in the template src/app/app.component.html:

<fa-icon [icon]="faCoffee"></fa-icon>
