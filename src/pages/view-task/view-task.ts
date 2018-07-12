import { LIST } from './../../mocks/list.Mock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {

    
  myList =  LIST;
  variable;
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.variable = this.navParams.get("variable"); 

    this.myList.push({task1:this.variable})


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTaskPage');
  }

}
