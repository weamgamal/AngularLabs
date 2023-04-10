import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ForbiddenName } from '../Validator/forbiddenName';
ForbiddenName
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  discountChecked: boolean = false
  ngOnInit(): void {

  }
  products: any = [
    { "id": 1, "title": "Car1", "price": 7840, "isbuy": false },
    { "id": 2, "title": "Car2", "price": 7850, "isbuy": false },
    { "id": 3, "title": "Car3", "price": 7860, "isbuy": false },
    { "id": 4, "title": "Car4", "price": 7800, "isbuy": false }
  ]
  notesForm = this.fb.group({
    name: ['', [ForbiddenName(/admin/)]],
    checkDiscount: [''],
    discount: [''],
    note: [''],
    aleternativeEmails: this.fb.array([]),
  });

  get name() {
    return this.notesForm.get('name');
  }

  get aleternativeComment() {
    return this.notesForm.get('aleternativeEmails') as FormArray;
  }

  addAlternativeComment() {
    this.aleternativeComment.push(this.fb.control(''));
  }
  deleteComment(index: any) {
    this.aleternativeComment.removeAt(index);
  }

  showDiscount() {

    this.notesForm.get('checkDiscount')?.valueChanges.subscribe(checkedValue => {
      if (checkedValue) {
        this.discountChecked = true;
      }
      else {
        this.discountChecked = false;
      }
    })

  }
}