import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9sxbovDhCnzMvtKFIf8mDn5lm2rwT_-CKL4M59yWJKqsfpipYxct6FgNqf2QVRS3rbO07GhOE6uMI-OS0PytnsP3kXad9LVtfUDm6uIT9AnIOh9_1' //renovar token con el post al servicio de spoty en postman, se vence cada 1 hora
    });
    return this.http.get(url, {headers});
  }

  getPlaylistById() {
    const playlist_id = '5DZKFTO9vviApjIISy14g7';
    let getQuery = this.getQuery(`playlists/${playlist_id}/tracks`)
    .pipe( 
      map ( (data: any) => {
        let tracks: any[] = [];
        data.items.forEach((track: any) => {
          tracks.push(track.track);
        });
        return tracks;
    }));
    return getQuery;
  }

  getUserById(userId: any){
    const user_id = userId;
    let getQuery = this.getQuery(`users/${user_id}`)
    .pipe(
      map((data: any) => {
        return data;
      })
    );
    return getQuery;
  }

  getSongsArtists(criteria: string){
    let getQuery = this.getQuery(`search?q=${criteria}&type=artist&limit=9`)
    .pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
    return getQuery;      
  }
}