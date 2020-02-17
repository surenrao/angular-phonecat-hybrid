import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
// for some reason stackblitz angular1 $resource works after importing HttpClientModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  entryComponents: [ HelloComponent ]
  // bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    console.log('Angular 8 is running!');
  }

  public ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: false });
  }
}
