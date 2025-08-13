import { AfterViewInit, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="container-fluid p-0">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :root {
      --primary: #0d6efd;
    }
    html { scroll-behavior: smooth; }
    body { font-family: "Segoe UI", Roboto, Arial, sans-serif; }
  `]
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    AOS.init({ duration: 700, once: true });
  }
}
