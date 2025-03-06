import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageConverterComponent } from './image-converter.component';

describe('ImageConverterComponent', () => {
  let component: ImageConverterComponent;
  let fixture: ComponentFixture<ImageConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageConverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
