import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getPosts(5).subscribe((p) => {
      console.log(p);
      this.posts = p;
    });
  }
}
