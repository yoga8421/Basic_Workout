// Step 4: Create a Service for API Calls
// ng g service services/api



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //  object create  pantrom
  constructor(private http: HttpClient) { }



  // api get pannaporom
  // athukku first getData ntra method ah call pannanum
  // getData method must be return observable
  // we can mention observable type as any
  getData(): Observable<any> {


    
    // create panna http object ah vachu  get method la API link kututhu data va return pantrom.
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}





// Step 5: Add HttpClientModule in app.module.ts