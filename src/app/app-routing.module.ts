import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoAdComponent } from './pages/video-ad/video-ad.component';

const routes: Routes = [
  { path: 'video-add', component: VideoAdComponent },
  { path: '', component: VideoAdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
