import { mount } from '@vue/test-utils'
import LoginPage from '@/pages/login'

describe('LoginPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoginPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
