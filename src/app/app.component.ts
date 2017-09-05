import { Component } from '@angular/core';
// 直接用，會自動對應參考 node_modules 下的lib
import { random } from 'lodash';
// declare var _: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = '值在app設定中賦予的';
  number = 0;

  rootItems = ['Apples', 'Bananas', 'Cherries'];
  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  /**
   * 值由user.component改變，再傳回到app.component中
   * @param newName
   */
  onNameChange(newName) {
    this.rootName = newName;
  }
  /**
   * 數值不會改變，因預設為0
   * 練習用chrome看web pack 及 augury 擴充套件看程式運行
   */
  onIncrease() {
    this.number = random(1, 10);
  }





}
