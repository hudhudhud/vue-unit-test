// 默认情况下，Jest 将会递归的找到整个工程里所有 .spec.js 或 .test.js 扩展名的文件
import { mount, shallowMount } from '@vue/test-utils'
import child from '../../view/child.vue'
import par from '../../view/par.vue'

describe('par', () => {
    const wrapper = mount(par)
    it('par add', () => {
        // 现在挂载组件，你便得到了这个包裹器
        const wrapper = mount(par)

        // 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
        expect(wrapper.vm.num).toBe(0)
        wrapper.find(child).vm.$emit('add', 3)
        expect(wrapper.vm.num).toBe(3)

        wrapper.setData({ num: 5 })
        expect(wrapper.vm.num).toBe(5)
    })

    //检测是否触发父组件上的事件
    it('toggle click', () => {
        const wrapper = mount(child)
        const mockFn = jest.fn()
        wrapper.vm.$on('toggleClick', mockFn)
        wrapper.find('.test').trigger('click')
        expect(mockFn).toBeCalled()

        const wrapperpar = mount(par)
        wrapperpar.find(child).vm.$emit('toggleClick')
        expect(wrapperpar.vm.num).toBe(55)
    })

    it('prop isActive', () => {
        const wrapper = mount(child)
        wrapper.setProps({ isActive: true })
        expect(wrapper.contains('.is-active')).toBe(true)
        wrapper.setProps({ isActive: false })
        expect(wrapper.contains('.is-active')).toBe(false)
    })
})