import {moduleMetadata} from "@storybook/angular";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Story} from "@storybook/angular/types-6-0";
import { InputComponent } from '../app/components/input/input.component';

export default {
 title: 'Input',
 component: InputComponent,
 decorators: [
   moduleMetadata({
     declarations: [InputComponent],
     imports: [FormsModule, ReactiveFormsModule],
   })
 ]
};

export const Default: Story = (args) => {
  return {
    template: `<app-input></app-input>`,
    props: args
  }
 }

export const InputFormStory: Story = (args) => {
 let formGroup = new FormBuilder().group({
    name: ['', Validators.required],
  });
 let errorMsg = "This field is required"

 return {
   template: `<form [formGroup]="group">
               <app-input [errorMsg]="errorMsg" [formControlName]="controlName"></app-input>
              </form>`,
   props: {
     group: formGroup,
     controlName: 'name',
     errorMsg: errorMsg
   }
 }
}