import { mount } from '@vue/test-utils'
import {AppButton} from '@/components/UI/AppButton.vue'


describe('AppButton', () => {
  test('is should display btnStyle', () => {
    const btnStyle = mount(AppButton)
    expect(btnStyle.vm)()
  })
})

