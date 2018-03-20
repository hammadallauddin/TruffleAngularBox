import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Web3Service } from './shared/web3.service';
import { SimpleComponentComponent } from './simple-component/simple-component.component';

@NgModule({
  declarations: [
	AppComponent,
	SimpleComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
