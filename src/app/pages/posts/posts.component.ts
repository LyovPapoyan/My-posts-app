import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts$!: Observable<IPost[]>;

  constructor(private _requestsService: RequestsService) {}

  ngOnInit(): void {
   this.posts$ = this._requestsService.getPosts()
  }

}
