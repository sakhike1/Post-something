import { mount } from '@vue/test-utils'
import AppButton from '@/components/UI/AppButton.vue'


test('AppButton renders correctly', () => {
    // Arrange
    const wrapper = mount(AppButton);
  
    // Act
  
    // Assert
    expect(wrapper.exists()).toBe(true);
  });
  
  test('AppButton has correct default props', () => {
    // Arrange
    const wrapper = mount(AppButton);
  
    // Act
  
    // Assert
    expect(wrapper.props().btnStyle).toBe('');
  });
  
  test('AppButton renders slot content', () => {
    // Arrange
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Button Text'
      }
    });
  
    // Act
  
    // Assert
    expect(wrapper.text()).toBe('Button Text');
  });
  
  test('AppButton applies btnStyle prop correctly', () => {
    // Arrange
    const btnStyle = 'custom-style';
    const wrapper = mount(AppButton, {
      propsData: {
        btnStyle: btnStyle
      }
    });
  
    // Act
  
    // Assert
    expect(wrapper.classes()).toContain(btnStyle);
  });
   
  