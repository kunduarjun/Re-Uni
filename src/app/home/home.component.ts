import { Component, OnInit } from '@angular/core';
import { UniLogoService } from '../services/uni-logo/uni-logo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  logos:String[] = [];

  constructor(private uniLogoService:UniLogoService) { }

  ngOnInit(): void {
      this.logos = this.uniLogoService.getAll();
  }
}
 