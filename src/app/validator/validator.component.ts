import { Component, OnInit } from '@angular/core';
import { barObj, barObjF, barSchema, carObj, carObjF, carSchema, personObj, personObjF, personSchema } from './schema.const';
import { Validator } from './validator.class';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  validator: Validator = new Validator();
  isBarObjTrue = false;
  isBarObjFTrue = false;
  iscarObjTrue = false;
  iscarObjFTrue = false;
  ispersonObjTrue = false;
  ispersonObjFTrue = false;

  constructor() { }

  ngOnInit(): void {
    this.isBarObjTrue = this.validator.validate(barObj, barSchema);
    this.isBarObjFTrue = this.validator.validate(barObjF, barSchema);
    this.iscarObjTrue = this.validator.validate(carObj, carSchema);
    this.iscarObjFTrue = this.validator.validate(carObjF, carSchema);
    this.ispersonObjTrue = this.validator.validate(personObj, personSchema);
    this.ispersonObjFTrue = this.validator.validate(personObjF, personSchema);
  }

}
