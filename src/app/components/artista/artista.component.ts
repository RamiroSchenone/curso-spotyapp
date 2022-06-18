import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  idArtist: string = "";
  artist: any = {};
  topTracks: any = [];

  $loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { 
    this.router.params.subscribe(params => {
      // console.log(params['id']);
      this.idArtist = params['id'];
      this.getArtistById(this.idArtist);
      this.getTopTracksByArtist(this.idArtist);
      
    });
  }

  getArtistById(id: string){
    this.spotifyService.getArtistById(id).subscribe( data => {
      // console.log(data);
      this.artist = data;
    });
  }

  getTopTracksByArtist(id: string){
    this.spotifyService.getTopTracksByArtist(id).subscribe( (data:any) => {
      console.log(data);
      this.topTracks = data;
      this.$loading = false;
    });
  }

  redirectUrlExternal(track: any){
    window.open(`${track.external_urls.spotify}`, '_blank');
  }
}
