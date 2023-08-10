import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj';
  messages= this.http.get<any[]>('http://localhost:4201')
  constructor(private http:HttpClient){

  }
  postData(){
    this.http.post<any>('https://backend.hisarauto.co.in/users',{firstName:'Rohit',lastName:'Singh'})
    .subscribe(next =>console.log(next));
  }
}
