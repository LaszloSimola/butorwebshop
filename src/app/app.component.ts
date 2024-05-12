import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { user } from '@angular/fire/auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router,private authService: AuthService){
    
  }

  ngOnInit(): void{
  this.routes = this.router.config.map(conf => conf.path) as string[];
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any)=> {
      
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if(this.routes.includes(currentPage)){
        this.page = currentPage;
      }
    })
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user',JSON.stringify(this.loggedInUser));
    }), (error: any) =>{
      console.error(error)
      localStorage.setItem('user',JSON.stringify('null'));
    };
    
  }

  changePage(selectedPage: string){
    // this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }
  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }
  logout(_?: boolean){
    this.authService.logout().then(() =>{
      console.log('logged out succesfully');
    }).catch(error => {
      console.error(error);
    });
    
  }
}
