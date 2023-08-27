import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: IPost;
}
