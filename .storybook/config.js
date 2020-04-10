import React from 'react';
import { Provider } from 'react-redux'
import store from './../src/appsystem/modules/charts/datastore/store'
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import 'storybook-chromatic';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming'
import customTheme from './customTheme';

import { GlobalStyle } from '../src/appsystem/_stories/globalstyles';


addDecorator(S => (
  <Provider store={store}>
    <S />
  </Provider>
));


// addParameters({
//   options: {
//     theme: themes.light
//   }
// })


addDecorator(withA11y);

// addDecorator(
//   storyFn => <div style={{ 
//                 backgroundColor: 'yellow',
//                 position: 'absolute', 
//                 top: '30px', 
//                 left: '30px', 
//                 bottom: '30px', 
//                 right: '30px', 
//                 margin: 'auto',
//                 overflow: 'auto',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               {storyFn()}
//             </div>
// )

//addDecorator(centered)

// addDecorator(story => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

// automatically import all files ending in *.stories.js

// configure(
//   [
//     require.context('../src', true, /\.stories\.js$/),
//   ],
//   module
// );

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);