import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  $loading: boolean = false;
  $artistsEmpty: boolean = true;

  artistas: any[] = [];

  error: boolean = false;
  errorStatus: any;
  errorMessage: any;

  constructor(
    private spotifyService: SpotifyService
  ) {}

  search(criteria: string){
    this.$loading = true;
    if(!criteria || criteria == ""){
      this.$loading = false;
      this.$artistsEmpty = true;
      this.artistas = [];
    }else{
      this.spotifyService.getArtistsByCriteria(criteria).subscribe( (data:any) => {
        this.artistas = data;
        this.$loading = false;
        this.$artistsEmpty = false;
      }, err => {
        this.errorStatus = err.error.error.status;
        this.errorMessage = err.error.error.message;
        this.error = true;
        this.$loading = false;
      });
    }
  }
}
