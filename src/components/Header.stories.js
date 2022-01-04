import Header from './Header'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Header',
  component: Header,
  
  // 各種ボタンがクリックされたことを確認できるようにする
  // argTypes: {
  //   onLogin: {
  //     action: 'onLogin'
  //   },
  //   onLogout: {
  //     action: 'onLogout'
  //   },
  //   onSignUp: {
  //     action: 'onSignUp'
  //   }
  // },

  // 全てのイベントを捕捉する
  // parameters: { actions: { argTypesRegex: '.*' } }

  // コンポーネントごとにデフォルトの ViewPort を設定する
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: `
    <Header
      @onLogout="onLogout"
      @onLogin="onLogin"
      @onSignUp="onSignUp"
      v-bind="$props"
    />
  `
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: { id: 1, name: 'sasaki' }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: {}
}
