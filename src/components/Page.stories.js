import Page from './Page'

export default {
  title: 'Page',
  component: Page,

  // コンポーネントごとにデフォルトの背景色を設定する
  // parameters: {
  //   backgrounds: {
  //     default: 'twitter'
  //   }
  // }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Page },
  template: `<Page />`
})

export const Default = Template.bind({})
Default.args = {}

// ストーリーごとにデフォルトの ViewPort を設定する
// export const ForTablet = Template.bind({})
// ForTablet.parameters = {
//   viewport: {
//     defaultViewport: 'ipad'
//   }
// }

// export const ForSmartPhone = Template.bind({})
// ForSmartPhone.parameters = {
//   viewport: {
//     defaultViewport: 'iphone6'
//   }
// }

// ストーリーごとにデフォルトの背景色を設定する
// export const ForTwitter = Template.bind({})
// ForTwitter.parameters = {
//   backgrounds: {
//     default: 'twitter'
//   }
// }

// export const ForFacebook = Template.bind({})
// ForFacebook.parameters = {
//   backgrounds: {
//     default: 'facebook'
//   }
// }
