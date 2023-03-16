import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() {}

  private blogDetails = new BehaviorSubject({});
  currentBlogsDetails = this.blogDetails.asObservable();

  updateBlogs(blog:any) {
    localStorage.setItem('currentBlog', '');
    this.blogDetails.next(blog);
    localStorage.setItem('currentBlog', JSON.stringify(blog));
    }
  

}
