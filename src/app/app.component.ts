import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectUtility } from './shared/utils/object.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'taxicab';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (ObjectUtility.getAgentInformation()) {
      this.router.navigate(['/home']);
    }
  }
}
