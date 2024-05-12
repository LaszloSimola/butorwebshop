import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { furniture } from '../models/furniture';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FurnituresServiceService {

  collectionName = 'furnitures'

  constructor(private http: HttpClient,private afs: AngularFirestore,private storage: AngularFireStorage) { }

  loadImageMeta(metaUrl: string): Observable<Array<furniture>> {
    //return this.http.get(environment.hostUrl +  '/assets/' + metaUrl) as Observable<Array<furniture>>;
    return this.afs.collection<furniture>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    // return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL();
  }

}
