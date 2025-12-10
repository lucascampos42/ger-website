import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {BlogService, IMAGE_PLACEHOLDER} from "../../../services/blog.service";
import {PostCard, WordpressPost} from "../../../types/blog.types";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {catchError, debounceTime, distinctUntilChanged, filter, of, switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  private blogService = inject(BlogService);
  private destroyRef = inject(DestroyRef)

  posts = signal<PostCard[]>([])
  staticPosts = signal<PostCard[]>([])
  latestPost = signal<PostCard | null>(null)
  currentPage = signal(1);
  totalPages = signal(1);
  postsPerPage = 30;
  search = new FormControl()

  ngOnInit(): void {
    this.getPosts()
    this.watchSearch()
  }

  getPosts() {
    this.blogService.getPosts().subscribe({
      next: async (data) => {
        const posts = await this.parsePosts(data);

        if (posts.length) {
          this.latestPost.set(posts.shift()!)
        }

        this.staticPosts.set(posts)
        this.posts.set(posts)

        this.blogService.getTotalPages({ per_page: this.postsPerPage }).then((totalPages) => {
          this.totalPages.set(totalPages);
        });
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

    return data.map((item) => {
      const image = media.find((image) => image.id === item.featured_media);

      return {
        id: item.id,
        title: item.title.rendered,
        image: image?.src ?? IMAGE_PLACEHOLDER
      };
    })
  }

  watchSearch() {
    this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((query) => {
        if (!!query && query.length >= 3) {
          return true;
        }

        this.posts.set(this.staticPosts());

        return false
      }),
      switchMap((query) => {
        return this.blogService.getPosts({search: query}).pipe(
          catchError((error) => {
            console.error(error)
            return of([])
          }),
        )
      }),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(async (data) => {
      const posts = await this.parsePosts(data);
      this.posts.set(posts)
    })
  }

  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages()) {
      return; // Não permite páginas fora do intervalo
    }

    this.currentPage.set(newPage);
    this.getPosts(); // Atualiza os posts para a nova página
  }
}
