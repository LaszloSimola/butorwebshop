import { Component, booleanAttribute } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  
  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;


  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService ) {

  }
  loading:boolean = false;

  async login() {

    this.loading = true;
    //promise
    /*
    this.loadingService.loadingwithPromise(this.email.value!, this.password.value!).then((_: boolean) => {
      this.router.navigateByUrl('/home');
    }).catch(error =>{
      console.error('incorrent email v password');
    }).finally(() => {
      console.log('this is finally')
    });
    */
   /*
    try{
    const bool = await this.loadingService.loadingwithPromise(this.email.value!, this.password.value!)
    this.router.navigateByUrl('/home');
      }catch(error){
      console.error('incorrent email v password');
    }
    */
    /*
    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            console.log(data);
            this.router.navigateByUrl('/home');
          }, error: (error) => {
            console.error(error);
            this.loading = false;
          }, complete: () => {
            console.log('finally');
            this.loading = false;
          }
        }
      );
      */

      this.authService.login(this.email.value!, this.password.value!).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/home');
        this.loading = false;
      }).catch(error =>{
        console.error(error);
        this.loading = false;
      });
  }
  

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}