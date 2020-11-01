import { Component, OnInit,Input } from '@angular/core';
import{FormControl}from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name="";
  email=new FormControl;
  
  showevent(){
    alert("event working");
  }
 
  constructor() { }


  ngOnInit(): void {
  }
 
  
 
 

}
