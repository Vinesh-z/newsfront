import { Socket } from './../interfaces/socket';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

declare var io: {
  connect(url: string): Socket;
};
@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  socket: Socket;
  observer: Observer<any>;
  
  getQuotes(): Observable<number> {
    this.socket = socketIo('http://localhost:8000');

    this.socket.on('data', (res) => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable(): Observable<number> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

  constructor() { }
}
