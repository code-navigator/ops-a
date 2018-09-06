import TextBox from '@/components/controls/TextBox/'
import { TestHelpers } from '../TestHelpers'

describe('layout: TextBox.vue', () => {
  const name = 'TextBox'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(TextBox, 'M', {
      propsData: {
        label: 'a label',
        value: 'some value'
      }
    })
  })

  test('should mount without errors', () => {
    h.isInstance()
  })

  test('has name', () => {
    h.hasName(name)
  })

  it('should display a label', () => {
    h.hasText('a label')
  })

  it('should display the text', () => {
    h.hasInputValue('some value')
    h.setText('input', 'new text')
    h.hasInputValue('new text')
  })

  it('should change emit a keyup event when the input changes', () => {
    h.input('input')
    h.emits('keyup')
  })
})
