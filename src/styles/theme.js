import { lighten, darken } from 'polished';

export default {
  primaryColor: '#424B61',
  background: darken(0.1,  '#f1f1f1'),

  headerTextColor: '#f1f1f1',
  white: '#ffff',

  textColor: '#262626',
  lightTextColor: lighten(0.1, '#262626'),
  linkTextColor: darken(0.1,  '#0F9FD9'),
  linkHoverTextColor: lighten(0.3, '#262626'),

  headerBgColor:  '#1C1C1C',
  footerBgColor: darken(0.3,  '#1C1C1C'),
};
