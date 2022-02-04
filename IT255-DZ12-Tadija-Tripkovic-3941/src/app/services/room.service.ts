import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../interfaces/room';
import {HttpClient} from '@angular/common/http'
import { select, Store } from '@ngrx/store';
import { selectedRooms } from '../store/selector/post.selector';
import { RoomState } from '../store/state/room.state';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  public rooms$: Observable<Room[]>;
 

  constructor(private _http: HttpClient, private _store: Store<RoomState>) {
    this.rooms$ = this._store.pipe(select(selectedRooms));
   }

   public fetchRooms(): Observable<Room []>{
   
     return this._http.get<Room[]>('http://localhost:3000/rooms');
   }

   public getPrice(numberOfNights: number){
    return numberOfNights;
  }
}
