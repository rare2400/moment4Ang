import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  constructor(private http: HttpClient) { }

  // Fetch courses from the API
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}