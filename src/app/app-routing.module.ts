import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {HowToUseComponent} from './pages/how-to-use/how-to-use.component';
import {AboutComponent} from './pages/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HistoryPageComponent
  },
  {
    path: 'howtouse',
    component: HowToUseComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
