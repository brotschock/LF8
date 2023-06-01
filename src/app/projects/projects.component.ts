import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../shared/customer.service';
import { ProjectList } from '../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() customerId : number = 0;
  heading = "Alle Projekte";
  projects$?: Observable<ProjectList>;
  constructor(private cs: CustomerService) {}
  
  ngOnInit(): void {
    if (this.customerId) {
      this.heading = "Projekte für Kunde " + this.customerId;
      this.projects$ = this.cs.getProjectsByCustomerId(this.customerId);
    } else {
      this.projects$ = this.cs.getAllProjects();
    }
  }

}
