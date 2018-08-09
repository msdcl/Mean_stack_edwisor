import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userNickName: any;
  @Input() userStatus : string='online';
  @Input() userBg: string;
  @Input() userColor: string;

  public firstChar: string;

  @Output() userNameAppear: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

      this.firstChar = this.userNickName[0];

  } // end ngOnInit
}
