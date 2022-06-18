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
      'Authorization': 'Bearer BQAtvKhYIo1blBMzA_34o0GEoB3htLbtx4Zi0JA4hA-WB-jTSZJJWGatJ1fVgL7MAvK9-gl_6jZmLqk8NwmIxXlhs7zecWfZ3UZC5jEs6Yg3e-1D3PjZ' //renovar token con el post al servicio de spoty en postman, se vence cada 1 hora
    });
    return this.http.get(url, {headers});
  }

  getArtistsByCriteria(criteria: string){
    let getQuery = this.getQuery(`search?q=${criteria}&type=artist&limit=9`)
    .pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
    return getQuery;      
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

  getArtistById(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracksByArtist(id: string){
    let getQuery = this.getQuery(`artists/${id}/top-tracks?market=ES`)
    .pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
    return getQuery;
  }
}