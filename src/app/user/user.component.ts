import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '雙向綁定物件';
  eventName = '輸入完畢後，會變更';
  dbClickName = '雙向點擊原事件';
  /**
   * 外部輸入值，要注意import Input這個模組
   */
  @Input() inputName;
  /**
   * 輸出到外部，這邊輸出的是個事件隊列
   */
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUserDbClick(event) {
    this.dbClickName = event.target.value;

  }
  onUserInput(event) {
    this.eventName = event.target.value;
  }

  onUserOutPutEvent(event) {
    this.nameChange.emit(event.target.value);
  }

}
