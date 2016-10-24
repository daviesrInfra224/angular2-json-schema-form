import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { JsonPointer } from '../utilities/index';

@Component({
  selector: 'array-widget',
  template: ``,
})
export class ArrayComponent implements OnInit {
  private formControlGroup: any;
  @Input() formGroup: FormGroup;
  @Input() layoutNode: any;
  @Input() formOptions: any;

  ngOnInit() {
    if ('pointer' in this.layoutNode) {
      this.formControlGroup =
        JsonPointer.getFromFormGroup(this.formGroup, this.layoutNode.pointer, true);
    }
  }
}
