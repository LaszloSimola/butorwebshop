import { Component, EventEmitter, Input,OnChanges,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnChanges{
  @Input() furnitureObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  constructor(){
  }

  ngOnChanges(){
    if(this.furnitureObjectInput){
      this.chosenImage = this.furnitureObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
    
  }
  
  reload(){
    this.imageObjectEmitter.emit(this.chosenImage);
  }

}
