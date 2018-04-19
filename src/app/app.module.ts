import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AssetService } from './asset.service';
import { KeysPipe } from './keypipes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
