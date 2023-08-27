import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  public post$!: Observable<IPost>

  constructor(private _activatedRoute: ActivatedRoute, private _requestService: RequestsService){}

  ngOnInit(): void {
   const id =  this._activatedRoute.snapshot.params['id'];
   this._getPost(id)
  }

  private _getPost(id: string) {
   this.post$ = this._requestService.getPostById(id)
  }

}
