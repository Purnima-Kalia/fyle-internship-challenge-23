// app.component.ts
import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  onSearch(username: string) {
    this.githubService.getUserRepos(username).subscribe(repos => {
      this.repositories = repos;
    });
  }
}
