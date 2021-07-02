import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/shared/app.service';


@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup

  constructor(
    private appService: AppService
    ) {
      this.form = new FormGroup({
        email: new FormControl(null, {
          validators: [Validators.required]
        }),
        subject: new FormControl(null, {
          validators: [Validators.required]
        }),
        message: new FormControl(null, {
          validators: [Validators.required]
        }),
      });
    }


  sendMessage() {
      this.appService.doesWork(
        this.form.value.email,
        this.form.value.subject,
        this.form.value.message,
      );
      this.form.reset();
  }
}
