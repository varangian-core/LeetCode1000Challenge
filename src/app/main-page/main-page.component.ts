import { Component, OnInit } from '@angular/core';
import { LeetCodeMockService } from '../services/leetcode-mock.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DataTableComponent implements OnInit {
  userStats: any;

  constructor(private leetCodeService: LeetCodeMockService) { }

  ngOnInit(): void {
    const username = 'dummyUser';
    this.leetCodeService.getUserData(username).subscribe(data => {
      this.userStats = data;
    });
  }
}
