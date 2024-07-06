import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedAccount: string | null = null;

  constructor(private router: Router) {}

  selectAccount(account: string) {
    this.selectedAccount = account;
  }

  onNext() {
    if (this.selectedAccount) {
      const modal = document.getElementById('Modal');
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance?.hide();
      }

      if (this.selectedAccount === 'parent') {
        this.router.navigate(['/parent/register']);
      } else if (this.selectedAccount === 'student') {
        this.router.navigate(['/register']);
      }
    }
  }
}
