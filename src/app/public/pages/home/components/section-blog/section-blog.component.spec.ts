import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogComponent } from './section-blog.component';

describe('SectionBlogComponent', () => {
  let component: SectionBlogComponent;
  let fixture: ComponentFixture<SectionBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
