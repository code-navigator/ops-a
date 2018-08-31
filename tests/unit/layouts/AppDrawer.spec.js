import AppDrawer from '@/components/layouts/AppDrawer/'
import { RouterLinkStub } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

describe('layout: AppDrawer.vue', () => {
  const name = 'AppDrawer'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(AppDrawer, 'M', {
      propsData: {
        drawer: false,
        routes: [{
          name: 'item1',
          path: '/path1'
        }]
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  // Is component mounted?
  test('should mount without errors', () => {
    h.isInstance()
  })

  // Does component have correct name?
  test('has name', () => {
    h.hasName(name)
  })

  // Does drawer slide in/out according to 'drawer' prop value?
  test('should slide out when drawer is true', () => {
    h.hasClass('.v-navigation-drawer', 'v-navigation-drawer--close')
    h.setProps({ drawer: true })
    h.hasClass('.v-navigation-drawer', 'v-navigation-drawer--open')
  })

  // Does drawer contain correct number of tiles?
  test('should contain correct number of tiles', () => {
    h.hasSelectors('.v-list__tile', 1)
  })

  // Does drawer list contain module names?
  test(`should contain module's name`, () => {
    h.hasSelectorWithText('.v-list__tile__title', 'item1')
  })

  // Does drawer list contain links to module path
  test(`should contain module's name`, () => {
    h.hasRouterLinkPath(RouterLinkStub, '/path1')
  })
})
