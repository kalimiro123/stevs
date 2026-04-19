import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContactComponent {
  selectedOffice = 'maroc'; // default tab

  selectOffice(office: string) {
    this.selectedOffice = office;
  }

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.selectedFiles.push(files[i]);
      }
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }




}
