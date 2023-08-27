import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from '../posts.component';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

//ng-zorro
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NzListModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule
  ]
})
export class PostsModule { }
