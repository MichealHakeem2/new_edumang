import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    return passwordValidator()(control);
  }

}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!value) {
      return null;
    }

    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasDigit = /[0-9]/.test(value);
    const hasSpecialChar = /[@$!%*?&#]/.test(value);

    const isValid = hasLowercase && hasUppercase && hasDigit && hasSpecialChar && value.length >= 8;

    return isValid ? null : { 'passwordInvalid': true };
  };
}
