import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ClublogService} from "../../app/qsos/services/clublog.service";
import {Qso} from "../../app/qsos/models/qso.model";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',

})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Qso[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public clublogService: ClublogService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = this.clublogService.syncQsos();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
