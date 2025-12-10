import {Component, effect, inject, input, OnInit, output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {BlogService, IMAGE_PLACEHOLDER} from "../../../../../services/blog.service";
import {PostCard, WordpressPost} from "../../../../../types/blog.types";

@Component({
  selector: 'app-section-blog',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './section-blog.component.html',
  styleUrl: './section-blog.component.scss'
})
export class SectionBlogComponent implements OnInit {
  private blogService = inject(BlogService);
  private router = inject(Router)

  title = input('Blog')
  omitPostId = input<number>()
  clickPost = output()

  posts: PostCard[] = []

  constructor() {
    effect(() => {
      if (this.omitPostId()) {
        this.getPosts()
      }
    });
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.blogService.getPosts({per_page: 4}).subscribe({
      next: (data) => {
        this.parsePosts(data)
      },
      error: (error) => console.error('Erro ao buscar o post:', error)
    });
  }

  async parsePosts(data: WordpressPost[]) {
    const media: {id: number, src: string }[] = []

    for (const item of data) {
      const src = await this.blogService.getPostImage(item.featured_media)
      media.push({ id: item.featured_media, src });
    }

    const filterPosts = this.omitPostId() ? data.filter(item => item.id !== this.omitPostId()) : data

    this.posts = filterPosts.slice(0, 3).map((item) => {
      const image = media.find((image) => image.id === item.featured_media);

      return {
        id: item.id,
        title: item.title.rendered,
        image: image?.src ?? IMAGE_PLACEHOLDER
      };
    })
  }

  async goToPost(id: number) {
    await this.router.navigate(["/blog/post/", id])
    this.clickPost.emit()
  }
}
