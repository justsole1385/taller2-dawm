// app.component.ts
import { Component } from '@angular/core';
import { ContactListComponent } from './components/contact-list/contact-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent],
  templateUrl: './app.html'
})
export class App { }
