import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any;
  @Input() tracks: boolean = false;
  @Input() artists: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
