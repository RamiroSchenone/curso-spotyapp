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
      'Authorization': 'Bearer BQD7WfV0m_whS7lRVk8TOVSAKZmSwp4ebjkYnTFY3KEkAKT5_GVYKkW0dumArYTm2bc00YHYAtWrstIaaN0' //renovar token con el post al servicio de spoty en postman, se vence cada 1 hora
    });
    const playlist_id = '5DZKFTO9vviApjIISy14g7';
    const urlPlaylist = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

    return this.http.get(urlPlaylist, {headers});
  }
}
