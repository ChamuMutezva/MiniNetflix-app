import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//name: string = "Chamu";
items: Observable<any[]>
  constructor(db: AngularFirestore) { 
    this.items = db.collection("login").valueChanges();
  }

  ngOnInit() {
  }

}
