import { mount } from '@vue/test-utils'
import {AppButton} from '@/components/UI/AppButton.vue'


describe('AppButton', () => {
  test('is should display post', () => {
    const Posts = mount(AppButton)
    expect(Posts.vm).toBeTruthy()
  });

  it('should throw an error if no value is passed', () =>{
    const resultFn = () => {
          add();
    };
    expect(resultFn).toThrow();
});
});

