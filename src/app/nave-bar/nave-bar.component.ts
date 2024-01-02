import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent {

  constructor(private router: Router) {}

  @Input() username!:String



  gotoFavorite(){
    this.router.navigate(['/favorites',this.username]);
  
  }

}


