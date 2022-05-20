import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tracksAdded: any[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) { 
    this.spotifyService.getPlaylistById()
    .subscribe( (data: any) => { 
      console.log(data);
      data.items.forEach((item:any) => {
        this.tracksAdded.push(item.track);
      });
    });
  }

  getTrackUrlExternal(track: any){
    window.open(`${track.external_urls.spotify}`, '_blank');
  }
}
