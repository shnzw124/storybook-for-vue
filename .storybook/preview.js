import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  // 使用する ViewPort のプリセットを変更する
  viewport: {
    viewports: INITIAL_VIEWPORTS

    // カスタム Viewport を利用する
    // {
    //   kindleFire2: {
    //     name: 'Kindle Fire 2',
    //     styles: {
    //       width: '600px',
    //       height: '963px'
    //     }
    //   },
    //   kindleFireHD: {
    //     name: 'Kindle Fire HD',
    //     styles: {
    //       width: '533px',
    //       height: '801px'
    //     }
    //   }
    // }
  },
  
  // 使用する背景色を定義する
  // backgrounds: {
  //   default: 'twitter',
  //   values: [
  //     {
  //       name: 'twitter',
  //       value: '#00aced'
  //     },
  //     {
  //       name: 'facebook',
  //       value: '#3b5998'
  //     }
  //   ]
  // }
}
