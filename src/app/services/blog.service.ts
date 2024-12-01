import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BlogPostParams, WordpressMedia, WordpressPost} from "../types/blog.types";
import {catchError, firstValueFrom, map, of} from "rxjs";

export const IMAGE_PLACEHOLDER = 'assets/post-2.png';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient)
  /*private apiUrl = 'https://gersolucoes.com/wp-json/wp/v2/posts';*/
  private apiUrl = 'https://codesdevs.com.br/wordpress/wp-json/wp/v2';

  getPosts(params?: BlogPostParams) {
    const httpParams = new HttpParams({ fromObject: {
        ...params,
        page: params?.page ?? 1,
        per_page: params?.per_page ?? 30,
        order: params?.order ?? 'desc',
        orderby: params?.orderby ?? 'date',
      } as any });
    return this.http.get<WordpressPost[]>(`${this.apiUrl}/posts`, { params: httpParams });
  }

  getPostById(id: number) {
    return this.http.get<WordpressPost>(`${this.apiUrl}/posts/${id}`);
  }

  getPostsSearch(params?: BlogPostParams) {
    const httpParams = new HttpParams({ fromObject: {
        ...params,
        order: params?.order ?? 'desc',
        orderby: params?.orderby ?? 'date',
      } as any });
    return this.http.get<WordpressPost[]>(`${this.apiUrl}/posts`, { params: httpParams });
  }

  async getPostImage(featuredMediaId: number): Promise<string> {
    if (featuredMediaId) {
      return firstValueFrom(this.http.get<WordpressMedia>(`${this.apiUrl}/media/${featuredMediaId}`).pipe(
        map((media) => media.source_url || IMAGE_PLACEHOLDER),
        catchError(() => of(IMAGE_PLACEHOLDER))
      ))
    } else {
      return firstValueFrom(of(IMAGE_PLACEHOLDER)) ;
    }
  }

  getTotalPages(params?: BlogPostParams): Promise<number> {
    const httpParams = new HttpParams({ fromObject: {
        ...params,
        per_page: params?.per_page ?? 30,
      } as any });

    return firstValueFrom(
      this.http.get(`${this.apiUrl}/posts`, {
        params: httpParams,
        observe: 'response' // Observa toda a resposta, incluindo os headers
      }).pipe(
        map((response) => {
          // Obtém o header X-WP-TotalPages
          const totalPages = response.headers.get('X-WP-TotalPages');
          return totalPages ? parseInt(totalPages, 10) : 1;
        }),
        catchError(() => of(1)) // Retorna 1 em caso de erro
      )
    );
  }
}
