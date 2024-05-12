import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.scss'
})
export class SuccessfulComponent implements OnInit{

  

  userId: string = '';

  constructor(private actroute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.actroute.params.subscribe((param: any) => {
      this.userId = param.userId as string;
    })
  }
}
