import { ViewTaskPage } from './../view-task/view-task';
import { LIST } from './../../mocks/list.Mock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {


  task1 = ""; 
  myList =  LIST;
  enterTask;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemsPage');
  }

  Add(){

  this.navCtrl.push("ViewTaskPage", {variable:this.enterTask});
  
  }

}


