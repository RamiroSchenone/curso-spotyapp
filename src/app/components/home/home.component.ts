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

  $loading: boolean = true;

  error: boolean = false;
  errorStatus: any;
  errorMessage: any;

  constructor(
    private spotifyService: SpotifyService,
  ) { 
    this.spotifyService.getPlaylistById()
    .subscribe( (data: any) => { 
      // console.log(data);
      this.tracksAdded = data;  
      this.$loading = false;
      // data.items.forEach((item:any) => {
      //   this.tracksAdded.push(item.track);
      // });
    }, err => {
      this.errorStatus = err.error.error.status;
      this.errorMessage = err.error.error.message;
      this.error = true;
      this.$loading = false;
    });

    // this.spotifyService.getUserById('21awov6tu6go5ao4lduaafbqy')
    // .subscribe( (data: any) => { 
    //   // console.log(data);
    // });
  }
}
