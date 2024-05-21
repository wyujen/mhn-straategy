import { Component } from '@angular/core'
import { Store } from 'libs/mhn-store/src/lib/frontend';
import { UpsertMany } from 'mycena-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mhn-strategy';
  constructor(){
    Store.subscribe((e)=> console.log(e))
    Store.dispatch(new UpsertMany('dragon',[{id:'01', name:'test'}]))
  }
}
