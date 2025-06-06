import { Component, computed, inject, signal } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  //signals för kurser, filtrering och sortering
  courses = signal<Course[]>([]);
  filterValue = signal<string>('');
  sortKey = signal<keyof Course>('code');
  sortAsc = signal<boolean>(true);

  //injicerar service som hämtar kursdata
  coursesService = inject(CoursesService);

  //computed signal som skapar den filtrerade och sorterade versionen av tabellen
  filteredCourses = computed(() => {
    //sök-input, sorterings"nyckel" och ordning på sorteringen
    const input = this.filterValue().toLowerCase();
    const key = this.sortKey();
    const asc = this.sortAsc();

    //hämtar nuvarande ordning på kurser och filtrerar (sökinput) och sorterar (tryck på th) dem
    return this.courses()
      .filter(course =>
        course.code.toLowerCase().includes(input) ||
        course.coursename.toLowerCase().includes(input)
      )
      .sort((a, b) => {
        const valueA = a[key].toLowerCase();
        const valueB = b[key].toLowerCase();

        //jämför värdena för riktningen av sortering (asc/desc)
        return (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) * (asc ? 1 : -1);
      })
  });

  //initierar komponenten och hämtar kursdata från service
  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((courses: Course[]) => {
      this.courses.set(courses);
    });
  }

  //uppdaterar filterValue-signalen när sökfältet ändras
  applyFilter(text: string) {
    this.filterValue.set(text);
  }

  /**
   * sorterar kurserna baserat på vald rubrik/sorteringsnyckel
   * sorteringsriktingen ändras vid klick på samma rubrik
   */
  sortBy(key: keyof Course) {
    if (this.sortKey() === key) {
      this.sortAsc.set(!this.sortAsc());
    } else {
      this.sortKey.set(key);
      this.sortAsc.set(true);
    }
  }
}