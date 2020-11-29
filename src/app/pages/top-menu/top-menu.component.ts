import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  public logout(): void {
    this.dataService.reset();
    this.router.navigate(['/']);
  }
}
