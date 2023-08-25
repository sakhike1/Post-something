import { mount } from '@vue/test-utils';
import PostList from '@/components/Posts/PostList.vue';


describe('MyComponent', () => {
    it('renders posts correctly', () => {
        const posts = [
            /* create sample post objects here */
        ];
        const wrapper = mount(PostList, {
            propsData: {
                isAdmin: false,
                posts: posts
            }
        });

        // Write assertions to check if the component renders as expected
        // For example:
        expect(wrapper.find('.post-list').exists()).toBe(true);
        expect(wrapper.findAll('.post-preview').length).toBe(posts.length);
        expect().toMatchSnapshot();
    });

    // More test cases can be added here
});
  
  
  
  
  
  