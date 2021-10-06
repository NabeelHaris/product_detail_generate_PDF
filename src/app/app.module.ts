import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailTemplateComponent } from './detail-template/detail-template.component';
import { ProductComponent } from './product/product.component';
import { FmtHeaderComponent } from './fmt-header/fmt-header.component';
import { FmtFooterComponent } from './fmt-footer/fmt-footer.component';

@NgModule({
  declarations: [AppComponent, DetailTemplateComponent, ProductComponent, FmtHeaderComponent, FmtFooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
