import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  constructor(private router:RouterModule){}

  // goToPage(pageName:string):void{
  //   this.router.navigate([`${pageName}`])
}

