import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
filmIcon = faBars;

  constructor() { 
  
  }

  ngOnInit() {
     const menuCtrl = document.querySelector(".menuCtrl");
    console.log(menuCtrl)
  }

}
