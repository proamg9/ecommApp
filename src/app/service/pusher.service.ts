declare const Pusher: any;

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pusher from "pusher-js"
@Injectable({
    providedIn: 'root'
})

// this service implements websocket funtcion
export class PusherService {
    pusher: any;
    channel: any;

    constructor( private http: HttpClient) {
        this.pusher = new Pusher(environment.pusher.key, {
            cluster: environment.pusher.cluster,
            forceTLS: true
        });
        this.channel = this.pusher.subscribe('category-channel');

    }


}
