import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = '值在app設定中賦予的';

  /**
   * 值由user.component改變，再傳回到app.component中
   * @param newName
   */
  onNameChange(newName) {
    this.rootName = newName;
  }

}
