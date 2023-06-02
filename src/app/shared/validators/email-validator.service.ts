import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailvalidatorService implements AsyncValidator {
  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   console.log({ email });

  //   return of({ emailTaken: true });
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });

        if (email === 'omar@email.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
          return;
        }

        subscriber.next(null);
        subscriber.complete();
      }
    );
    return httpCallObservable;
  }
}
