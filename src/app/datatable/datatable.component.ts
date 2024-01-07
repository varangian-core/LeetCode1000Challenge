import { Component, Input, OnInit } from '@angular/core';
import { LeetCodeService } from '../services/leetcode.service'; // Adjust the path as needed

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() users: any[] = [];

  constructor(private leetCodeService: LeetCodeService) { }

  ngOnInit(): void {
    // Fetch the users data when the component initializes
    this.leetCodeService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
