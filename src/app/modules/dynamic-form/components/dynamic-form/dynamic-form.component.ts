import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      name: '',
      skills: this._formBuilder.array([])
    });
  }

  // Гетер получения skills из myForm
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  // Новый скилл
  newSkill(): FormGroup {
    return this._formBuilder.group({
      skill: '',
      exp: ''
    });
  }

  // Добавление нового скила
  addSkill() {
    this.skills.push(this.newSkill());
  }

  // Удаление скила
  removeSkill(item: number) {
    this.skills.removeAt(item);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
