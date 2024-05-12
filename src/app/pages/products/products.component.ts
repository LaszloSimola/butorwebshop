import { Component, OnInit } from '@angular/core';
import { FurnituresServiceService } from '../../shared/services/furnitures.service.service';
import { furniture } from '../../shared/models/furniture';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

    furnitureObject? : Array<furniture>;
    chosenImage?: furniture;


  
  constructor(private furnitureService: FurnituresServiceService){  
  }

  ngOnInit(): void {
    this.furnitureService.loadImageMeta('furniture.json').subscribe((data: Array<furniture>)=>{
    console.log(data);
      this.furnitureObject = data;
    });
  }


  loadImage(imageObject: furniture){
    this.chosenImage = imageObject;
  }

}
