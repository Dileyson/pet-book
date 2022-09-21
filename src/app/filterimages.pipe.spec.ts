import { TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

describe('FilterimagesPipe', () => {

  let filter: FilterimagesPipe;
  let service: ImageService;
  let allImages = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterimagesPipe,ImageService]
    });
   
    service = TestBed.inject(ImageService)
    filter = TestBed.inject(FilterimagesPipe)

    spyOn(service, 'getImages').and.returnValue(allImages)
  });




  it('Crea la instancia', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Al filtrar por perro devuelve las imagenes de estos (3 en este caso)', ()=>{
    let imagesDog = filter.transform(service.getImages(), "perro")
    expect(imagesDog.length).toEqual(3)
  })

  it('Al filtrar por gato devuelve las imagenes de estos (2 en este caso)', ()=>{
    let imagesDog = filter.transform(service.getImages(), "gato")
    expect(imagesDog.length).toEqual(2)
  })

  it('Al filtrar por all devuelve las imagenes de todo (5 en este caso)', ()=>{
    let imagesDog = filter.transform(service.getImages(), "all")
    expect(imagesDog.length).toEqual(5)
  })

  it('Al filtrar por otra no devuelve nada ', ()=>{
    let imagesDog = filter.transform(service.getImages(), "Ey")
    expect(imagesDog.length).toEqual(0)
  })

});
