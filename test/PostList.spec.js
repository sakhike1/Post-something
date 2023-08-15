import { mount } from '@vue/test-utils'
import PostList from '@/components/Posts/PostList.vue'


describe('PostList', () => {
  test('is should display post', () => {
    const Posts = mount(PostList)
    expect(Posts.vm).toBeTruthy()
  })
})

