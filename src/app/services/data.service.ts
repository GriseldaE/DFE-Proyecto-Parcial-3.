import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';


const API_PATH = 'https://655d93c69f1e1093c59981b6.mockapi.io/';


@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private http: HttpClient) { 
  }
  
  getGameListas():Observable<Game[]>{
    const path = API_PATH +'games';
    return this.http.get<Game[]>(path);
  }
}
