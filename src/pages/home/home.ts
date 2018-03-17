import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public orders: Array<any> = [];
  public personRef: firebase.database.Reference = firebase.database().ref(`/order_id/`);  

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.personRef.on('value', itemSnapshot => {
      this.orders = [];
    itemSnapshot.forEach( itemSnap => {  
      this.orders.push(itemSnap.val());
      return false;
    });
    console.log(this.orders);
    });
}

}
