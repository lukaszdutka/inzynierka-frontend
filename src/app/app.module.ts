import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TagComponent} from './tag/tag.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './static/header/header.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSnackBar, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HowToUseComponent} from './pages/how-to-use/how-to-use.component';
import {AboutComponent} from './pages/about/about.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {MenuComponent} from './static/menu/menu.component';
import {ContextMenuModule} from 'ngx-contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    HeaderComponent,
    HowToUseComponent,
    AboutComponent,
    HistoryPageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ContextMenuModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
