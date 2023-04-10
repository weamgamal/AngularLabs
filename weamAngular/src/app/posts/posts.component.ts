import { Component } from '@angular/core';
import { IPost } from '../SharedClassesAndTypes/IPosts';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  errMsg: string = "";
  arrayPosts: IPost[] = [];

  constructor(private _PostService:PostService ,

    private router: Router
  ) { }
  ngOnInit(): void {
    // this.getUsers();
    this._PostService.getUsers().subscribe(
      {
        next: data => this.arrayPosts = data,
        error: err => this.errMsg = err
      }
    )
  }

  viewComments(postId: number): void {
    this.router.navigate(['/Comments', postId]);
  }
}
