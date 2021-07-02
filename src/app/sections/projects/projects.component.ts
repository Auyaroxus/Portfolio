import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { Project } from 'src/app/shared/interfaces/project.interface';


@Component({
  selector: 'projects-app',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit  {
  projects: Project[] = [];

  constructor(private appService: AppService) {}


  ngOnInit() {
    this.appService.getProjects()
    .subscribe(result => {
      console.log(result.message);
      this.projects = result.documents;
    });
  }
}
