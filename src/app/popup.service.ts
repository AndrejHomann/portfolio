import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupService {
  private popupVisible = new BehaviorSubject<boolean>(false);
  popupVisible$ = this.popupVisible.asObservable();

  showPopup() {
    this.popupVisible.next(true);
  }

  closePopup() {
    this.popupVisible.next(false);
  }
}

