import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  PostId: any;
  Comments: any[] = [];
  constructor(
    private _Posts: PostService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((Parm: ParamMap) => {
      this.PostId = Parm.get("id");
      this._Posts.getCommentInPost(this.PostId)?.subscribe((data: any) => {
        this.Comments = data;
      });
    })
  }

}
