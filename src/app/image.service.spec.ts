import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    });
    service = TestBed.inject(ImageService);
  });

  it('Debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  
  it('Mostrar todas las imagenes', () => {
    let allImages = service.getImages()
    expect(allImages.length).toEqual(5)

  })

  it('Retornar una imagen dada (en este caso la imagen de id=1)', () => {
    let image = service.getImage(1)
    expect(image.id).toEqual(1)

  })

  it('Retornar indefinido al pasar un id que no existe(en este caso la imagen de id=10)', () => {
    let image = service.getImage(10)
    expect(image).toBeUndefined()
  })



});
