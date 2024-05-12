import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
  MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp({"projectId":"webkert-3d644","appId":"1:1083208820474:web:17550695b831106ba2cb43","storageBucket":"webkert-3d644.appspot.com","apiKey":"AIzaSyCj-Ws3vMeg0SCKqTICCmYWrgNM0osAzRs","authDomain":"webkert-3d644.firebaseapp.com","messagingSenderId":"1083208820474","measurementId":"G-F42FL4J5KC"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"webkert-3d644","appId":"1:1083208820474:web:17550695b831106ba2cb43","storageBucket":"webkert-3d644.appspot.com","apiKey":"AIzaSyCj-Ws3vMeg0SCKqTICCmYWrgNM0osAzRs","authDomain":"webkert-3d644.firebaseapp.com","messagingSenderId":"1083208820474","measurementId":"G-F42FL4J5KC"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
