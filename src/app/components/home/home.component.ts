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
  usersid: any[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) { 
    this.spotifyService.getPlaylistById()
    .subscribe( (data: any) => { 
      console.log(data);
      this.tracksAdded = data;  
      // data.items.forEach((item:any) => {
      //   this.tracksAdded.push(item.track);
      // });
    });

    this.spotifyService.getUserById('21awov6tu6go5ao4lduaafbqy')
    .subscribe( (data: any) => { 
      // console.log(data);
    });
  }

  getTrackUrlExternal(track: any){
    window.open(`${track.external_urls.spotify}`, '_blank');
  }
}
