import { Component, OnInit } from '@angular/core';
//TODO: need to implement the API here

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // Define a property to hold the users data
  users: any[] = [];

  constructor(private leetCodeService: LeetCodeService) { }

  ngOnInit(): void {
    // Fetch the users data when the component initializes
    this.leetCodeService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
