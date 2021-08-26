import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {HttpservicesService} from 'src/app/services/httpservices.service'
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  msg!:String;
  ret?:any;
  progress:any;
  dados:any
  ser!:HttpservicesService;
  errar?:String;
  constructor(private http:HttpClient,private snack:MatSnackBar) { }

  ngOnInit(): void {
  this.dados=""
  
  }
  envio():void{
    //console.log(this.msg.length)
    if(this.msg){
       
      this.progress=this.msg
    let headers = new HttpHeaders() ;
    headers=headers.set('content-type','application/json');
    headers=headers.set('Acces-Control-Allow','*')
    this.http.get<Observable<String>>(`https://romariosms.herokuapp.com/enviar?msg=${this.msg}`).subscribe(data=>{
       
    this.ret=data;
    this.progress=undefined ;
    this.showMessage(this.ret);
  
  })
    }
    else{
    this.errar="Impossível enviar mensagem vazia "  
    
    }
  
}

  showMessage(msg: string): void{
    console.log(msg);
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top"

    })
  }

}
 