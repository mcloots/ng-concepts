import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@ng-concepts/shared-ui';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [ RouterModule, NavbarComponent],
  selector: 'ng-concepts-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ng-concepts';

  ngOnInit(): void {
    initFlowbite();
  }
}
