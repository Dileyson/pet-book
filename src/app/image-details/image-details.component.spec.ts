import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let service: ImageService;
    


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [ImageService]
    })
    .compileComponents();

    service = TestBed.inject(ImageService)

    spyOn(service, 'getImage').and.returnValue({ "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" })
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
