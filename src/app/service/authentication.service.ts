import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
declare const Pusher: any;
export interface UserDetails {
     _id: string;
     email: string;
     exp: number;
     iat: number;
}
interface TokenResponse {
     token: string;
}
export interface User {
     email: string;
     password: string;
}

/// this service is between frontend and backend.

@Injectable()
export class AuthenticationService {
     pusher: any;
     channel: any;
     api_url='http://ec2-18-191-122-177.us-east-2.compute.amazonaws.com:4100/api/';
     private token: string;
     constructor(private http: HttpClient, private router: Router) {
          Pusher.logToConsole = true;
          this.pusher = new Pusher(environment.pusher.key, {
               cluster: environment.pusher.cluster,
               forceTLS: true
           });
           this.channel = this.pusher.subscribe('category-channel');
     }

     // from here, get and save user token, and get userdetail
      private saveToken(token: string): void {
          localStorage.setItem('plann-token', token);
          this.token = token;
     }
     private getToken(): string {
          if (!this.token) {
               this.token = localStorage.getItem('plann-token');
          }
          return this.token;
     }
     public getUserDetails(): UserDetails {
          const token = this.getToken();
          let payload;
          if (token) {
               payload = token.split('.')[1];
               payload = window.atob(payload);
               return JSON.parse(payload);
          } else {
               return null;
          }
     }
     public isLoggedIn(): boolean {
          const user = this.getUserDetails();
          if (user) {
               return user.exp > Date.now() / 1000;
          } else {
               return false;
          }
     }

     // send http request from frontend to backend
     private request(method: 'post'|'get', type: 'login', user?:any): Observable<any> {
          let base;
          if (method === 'post') {
               base = this.http.post(this.api_url+`${type}`, user);
          } else {
               base = this.http.get(this.api_url+ `${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
          }

          const request = base.pipe(
               map((data: TokenResponse) => {
               if (data.token) {
                    this.saveToken(data.token);
               }
               return data;
               })
          );
          return request;
     }

     public login(user: any): Observable<any> {
          return this.request('post', 'login', user);
        }

        public logout(): void {
          this.token = '';
          window.localStorage.removeItem('plann-token');
          this.router.navigateByUrl('/');
     }



     //// main service  :
     // From here ,send CRUD request to server (Category,product)

     public getallcategory(): Observable<any> {
          return this.http.get(this.api_url+'getallcategory', { headers: { Authorization: `Bearer ${this.getToken()}` }});
     }

     public addcategory(category: any): Observable<any> {
          return this.http.post(this.api_url+'addcategory',category);
     }

     public editcategory(category: any): Observable<any> {
          return this.http.post(this.api_url+'editcategory',category);
     }
      public delcategory(category: any): Observable<any> {
          return this.http.post(this.api_url+'delcategory',category);
     }


     //
      public addproduct(product: any): Observable<any> {
          return this.http.post(this.api_url+'addproduct',product);
     }

     public getproduct(category: any): Observable<any> {
          return this.http.post(this.api_url+'getproduct',category);
     }
     public delproduct(product: any): Observable<any> {
          return this.http.post(this.api_url+'delproduct',product);
     }
}
