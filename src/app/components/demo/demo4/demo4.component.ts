import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  fg! : FormGroup
  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.builder.group({
      email : [null],
      confirmEmail : [null,this.verifyEmail()]
    })
  }

  verifyEmail() : ValidatorFn | null {
    return (control : AbstractControl) => {
      console.log(this.fg?.controls["email"].value)
      console.log(control.value)
      return null
    }
    return null
  }

}
