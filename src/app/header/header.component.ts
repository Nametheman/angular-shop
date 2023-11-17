import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() onPageNavigated = new EventEmitter<string>();

  onSelect(page: string) {
    this.onPageNavigated.emit(page);
  }
}
