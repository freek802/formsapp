import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public cantBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return { noStrider: true };
    }

    return null;
  }

  public stringEquals(value1: string, value2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(value1)?.value;
      const fieldValue2 = formGroup.get(value2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(value2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }
      formGroup.get(value2)?.setErrors(null);

      return null;
    };
  }
}
