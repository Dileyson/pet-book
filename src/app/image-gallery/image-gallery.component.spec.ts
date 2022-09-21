import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service: ImageService;
  let filter: FilterimagesPipe;
  let allImages = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, FilterimagesPipe ],
      providers: [ImageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ImageService)

    spyOn(service, 'getImages').and.returnValue(allImages)

  }));


  it('Crea el componente', () => {
    expect(Component).toBeTruthy();
  });

  it('Debe mostrar todas las imagenes en la pantalla', () =>{
    let allImagesView = fixture.debugElement.queryAll(By.css('.img'))
    expect(allImagesView.length).toEqual(5)

  })

  it('Debe mostrar todos los botones en la pantalla', () =>{
    let allButtonView = fixture.debugElement.queryAll(By.css('Button.btn'))
    expect(allButtonView.length).toEqual(3)

  })

  it('Debe mostrar todas las imagenes de perros en la pantalla al dar click en el boton perro', () =>{
    let btnPerro = fixture.debugElement.query(By.css('#perro'));
    btnPerro.nativeElement.click()
    let imagesDog = fixture.debugElement.queryAll(By.css('.img'));
    expect(imagesDog.length).toEqual(3);
  })


  it('Debe mostrar todas las imagenes de gatos en la pantalla al dar click en el boton gato', () =>{
    let btnGato = fixture.debugElement.query(By.css('#gato'))
    btnGato.nativeElement.click()
    let imagesCat = fixture.debugElement.queryAll(By.css('.img'))
    expect(imagesCat.length).toEqual(2)
  })

  it('Debe mostrar todas las imagenes en la pantalla al dar click en all', () =>{
    let btnAll = fixture.debugElement.query(By.css('#all'))
    btnAll.nativeElement.click()
    let allImagesView = fixture.debugElement.queryAll(By.css('.img'))
    expect(allImagesView.length).toEqual(5)

  })



  
  

});

  
