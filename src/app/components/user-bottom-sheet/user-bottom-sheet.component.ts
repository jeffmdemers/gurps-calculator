import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user-bottom-sheet',
  templateUrl: './user-bottom-sheet.component.html',
  styleUrls: ['./user-bottom-sheet.component.scss']
})
export class UserBottomSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<UserBottomSheetComponent>) { }

  itemClicked(): void {
    this.bottomSheetRef.dismiss();
  }


}
