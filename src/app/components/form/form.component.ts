import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() maxChars: number = 10;

  contactForm: FormGroup = new FormGroup({});

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    const numReg = new RegExp(/^\+[0-9]*$/)
    this.contactForm = this.fb.group({
      user: ['', [Validators.pattern(/^(([A-Za-z]*)*([0-9]*)*)*$/)]],
      useremail: ['', [Validators.email]],
      userphone: ['', [Validators.pattern(numReg)]],
      Message: ['', Validators.maxLength(this.maxChars)]
    })
  }




}
