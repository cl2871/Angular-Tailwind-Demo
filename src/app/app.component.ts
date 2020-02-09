import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tailwind-Angular-Demo';

  @ViewChild('navbarMenu', {static: false}) navbarMenu: ElementRef;

  /**
   * On mobile, the hamburger is used to toggle the sidebar.
   * On mobile, the sidebar when opened will overlay on top of the messages view.
   */
  toggleNavbar() {
    this.navbarMenu.nativeElement.classList.toggle('hidden');
    this.navbarMenu.nativeElement.classList.toggle('absolute');
  }
}
