import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet, RouterState} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {ViewportScroller} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: ''
})
export class AppComponent implements OnInit {
  private router = inject(Router)
  private titleService = inject(Title)
  private viewportScroller = inject(ViewportScroller)
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    this.handleRouteEvents()
  }

  handleRouteEvents() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        const state = this.router.routerState;
        const parent = this.router.routerState.root;
        this.viewportScroller.scrollToPosition([0, 0]);
        const title = this.getRouteOption({state, parent, key: 'title'})[0];
        this.titleService.setTitle(title);
      }
    });
  }

  getRouteOption({state, parent, key}: {state: RouterState, parent: ActivatedRoute, key: string}): string[] {
    const data = [];
    if (parent?.snapshot?.data[key]) {
      data.push(parent.snapshot.data[key]);
    }
    if (state && parent?.firstChild) {
      data.push(...this.getRouteOption({state, parent: parent.firstChild, key}));
    }
    return data;
  }
}
