import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myform = new FormGroup({
    name:new FormControl('')

  });

  onSubmit(){
    console.log(this.myform.value);
  }

}
// Modify form.component.html: