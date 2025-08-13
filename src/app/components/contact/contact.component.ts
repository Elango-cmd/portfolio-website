import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = 'elangoe994@gmail.com';
  send(e: Event) {
    e.preventDefault();
    alert('Thanks — message will be sent (hook up a backend or email service to send real messages).');
  }
}
