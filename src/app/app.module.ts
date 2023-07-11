import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IgxComboModule, IgxIconModule } from 'igniteui-angular';
import { ComboTemplateComponent } from './combo-template/combo-template.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ComboTemplateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxComboModule,
    IgxIconModule,
  ],
  providers: [],
  schemas: [],
})
export class AppModule {}
