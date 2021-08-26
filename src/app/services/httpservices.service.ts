import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  url="http://localhost:8000/enviar";
  res:any;
  constructor(private http:HttpClient) { }  

  enviar(x:string){
    //this.http.get(`http://localhost:8000/enviar?msg=${x}`).subscribe(data=>{
       
      //this.res=data;
      //console.log(this.res)
    //})
  console.log(x) 
  }

  }

