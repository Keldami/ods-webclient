import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-processor-chain-form',
  templateUrl: './processor-chain-form.component.html',
})
export class ProcessorChainFormComponent implements OnInit {

  processorChainForm: FormGroup;
  processorsArray: FormArray;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.processorsArray = this._formBuilder.array([this.createProcessor()]);
    this.processorChainForm = this._formBuilder.group({
      id: ['', Validators.required],
      processors: this.processorsArray
    });
  }


  createProcessor() {
    return this._formBuilder.group({
      name: [''],
      arguments: this._formBuilder.group({})
    });
  }


  addProcessor() {
    (<FormArray>this.processorsArray).push(this.createProcessor());
  }

  addArgs(group: FormGroup, name: string, value: object) {
    const control = new FormControl(value);
    group.addControl(name, control);
  }

  removeProcessor(i: number) {
    const control = <FormArray>this.processorsArray;
    control.removeAt(i);
  }

  save(form: FormGroup) {
    console.log(JSON.stringify(form.getRawValue()));
  }

}