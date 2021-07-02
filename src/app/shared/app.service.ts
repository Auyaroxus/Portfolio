import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Project } from "./interfaces/project.interface";
import { Email } from "./interfaces/email.interface";

const BACKEND_URL = 'http://localhost:3000/api';

@Injectable({providedIn: 'root'})
export class AppService  {

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<{message: String, documents: Project[]}>(BACKEND_URL + '/backend');
  }

  doesWork(email: string, subject: string, message: string) {
    const em: Email = {
      email: email,
      subject: subject,
      message: message,
    }
    this.http.post(BACKEND_URL + '/backend', em).subscribe((result) => {
      console.log(result);
    });
  }

}

