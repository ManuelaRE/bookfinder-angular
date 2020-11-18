import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { AngularFireModule} from '@angular/fire';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'results', component: ResultsComponent}
];

const firebaseConfig = {
  apiKey: "AIzaSyAp7yXb59RSzv2PT0QyQ36K6TBUogqy1v4",
  authDomain: "bookfinder-28c38.firebaseapp.com",
  databaseURL: "https://bookfinder-28c38.firebaseio.com",
  projectId: "bookfinder-28c38",
  storageBucket: "bookfinder-28c38.appspot.com",
  messagingSenderId: "15237171516",
  appId: "1:15237171516:web:7a073a7a5fa5eaf30ab639"
};


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CollectionComponent,
    ResultsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
