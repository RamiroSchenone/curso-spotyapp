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

  $loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { 
    this.router.params.subscribe(params => {
      // console.log(params['id']);
      this.idArtist = params['id'];
      this.spotifyService.getArtistById(this.idArtist).subscribe( data => {
        console.log(data);
        this.artist = data;
        this.$loading = false;
      });
    });
  }
}
