import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeetCodeMockService {
  private dummyData = {
    status: "success",
    message: "retrieved",
    totalSolved: 8,
    totalQuestions: 3033,
    easySolved: 5,
    totalEasy: 778,
    mediumSolved: 3,
    totalMedium: 1591,
    hardSolved: 0,
    totalHard: 664,
    acceptanceRate: 62.5,
    ranking: 1169900,
    contributionPoints: 274,
    reputation: 3,
    submissionCalendar: {
      "1702252800": 2,
      "1702339200": 7,
      "1702425600": 3,
      "1702684800": 3,
      "1702857600": 1
    }
  };

  constructor() { }

  getUserData(username: string): Observable<any> {
    //TODO:   need to implement the API here
    return of(this.dummyData);
  }
}
