import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentCollection: Array<object>=[];
  studentRecord: object;

  studNO: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  
  message = '';
  printing = false;

  private checkPattern (value:any , pattern: RegExp): boolean {
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  appStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studentNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if (this.checkPattern(this.studNO, studentNumberPattern) &&
        this.checkPattern(this.studFname, stringPattern) &&
        this.checkPattern(this.studLname, stringPattern) &&
        this.checkPattern(this.studProg, stringPattern) &&
        this.checkPattern(this.studYr, studYearPattern)){

          this.studentRecord = {
            studentNumber:this.studNO,
            studFirstName:this.studFname,
            studLastName:this.studLname,
            studProgram:this.studProg,
            studentYear:this.studYr,

          };

          this.studentCollection.push(this.studentRecord);
          this.message = null;
          this.clearValues();
        } else {
          this.message = 'Errors have been encountered and therefore cant display the list'
          return false;
        }
  }

  listsStudent(): void {
    this.printing = true;
    console.log('Showing stored students');
  }

  clearValues(): void{
    this.studNO = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;

  }
  
}

