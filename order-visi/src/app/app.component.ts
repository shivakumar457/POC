import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='';
  age:number;
  found:boolean;
  countryName:string;
  constructor(private httpClient:HttpClient) {}
  onNameKeyUp(event:any) {
    this.name= event.target.value;
    this.found=false;
  }
  getProfile() {
  
    this.httpClient.get('http://localhost:8080/nemos/getTerminationCountries')
    //this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
      .subscribe(
        (data:any[]) => {
          console.log(data);
          //this.countryName=data[0].name;
        }
      )
  }

  postProfile(){
    this.httpClient.post(`http://localhost:8080/nemos/getTerminationCountries/`,
      {
        Country:'asia'

      })
      .subscribe(
        data => {

          this.countryName = JSON.stringify(data);
        }
      )
  }

}
