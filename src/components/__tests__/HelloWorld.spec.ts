import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SiteTitle from '../SiteTitle.vue'

describe('HelloWorld', () => {
	it('renders properly', () => {
		const wrapper = mount(SiteTitle, { props: { title: 'Test for Vitest' } })
		expect(wrapper.text()).toContain('Test for Vitest')
	})
})
