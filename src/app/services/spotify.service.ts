import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getPlaylistById() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDXvAvA75NlQZiex3Nn3-VdGremEvfqHaIUf051xzDDD4eRH0HrPq_wc6ZZfwHQZecLf-tgIXGr2C09zK60vLHvWd-47PuTVoLowYDZmTn3KsekGNrT' //renovar token con el post al servicio de spoty en postman, se vence cada 1 hora
    });
    const playlist_id = '5DZKFTO9vviApjIISy14g7';
    const urlPlaylist = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

    return this.http.get(urlPlaylist, {headers});
  }

  getUserById(userId: any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDXvAvA75NlQZiex3Nn3-VdGremEvfqHaIUf051xzDDD4eRH0HrPq_wc6ZZfwHQZecLf-tgIXGr2C09zK60vLHvWd-47PuTVoLowYDZmTn3KsekGNrT' //renovar token con el post al servicio de spoty en postman, se vence cada 1 hora
    });
    const user_id = userId;
    const urlPlaylist = `https://api.spotify.com/v1/users/${user_id}`;

    return this.http.get(urlPlaylist, {headers});
  }
}
