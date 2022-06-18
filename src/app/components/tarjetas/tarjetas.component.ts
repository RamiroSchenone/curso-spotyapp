import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any;
  @Input() tracks: boolean = false;
  @Input() artists: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickCard(item:any){
    if(item){
      if(item.type == "track"){
        // console.log(`id track = ${item.id}`);
        // this.router.navigate(['/track', item.id]);
        window.open(`${item.external_urls.spotify}`, '_blank');
      }
      else if(item.type == "artist"){
        // console.log(`id artist = ${item.id}`);
        this.router.navigate(['/artist', item.id]);
      }
      else{
        console.log(item);
      }
    }
  }
}
