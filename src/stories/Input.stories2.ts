// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from '../app/components/input/input.component';
import { moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

export default {
  title: 'Example/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="height: 4rem">${story}</div>`),
  ],
  argTypes: {},
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  value: "John Cena",
  errorMsg: "This field is required"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button'
// };


