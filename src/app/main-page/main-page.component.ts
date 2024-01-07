import { Component, OnInit } from '@angular/core';
import { LeetCodeMockService } from '../services/leetcode-mock.service'; // Adjust the import path as needed

@Component({
  selector: 'app-main-page', // Corrected selector
  templateUrl: './main-page.component.html', // Corrected template URL
  styleUrls: ['./main-page.component.css'] // Corrected style URL
})
export class MainPageComponent implements OnInit { // Corrected class name
  userStats: any;

  constructor(private leetCodeService: LeetCodeMockService) { }

  ngOnInit(): void {
    const username = 'dummyUser';
    this.leetCodeService.getUserData(username).subscribe(data => {
      this.userStats = data;
    });
  }
}
