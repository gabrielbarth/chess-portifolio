import { lighten, darken } from 'polished';

export default {
  primaryColor: '#0F9FD9',
  background: '#f1f1f1',

  textColor: '#262626',
  lightTextColor: lighten(0.1, '#262626'),
  linkTextColor: darken(0.1,  '#0F9FD9'),
  linkHoverTextColor: lighten(0.3, '#262626'),

  headerBgColor: darken(0.1,  '#f1f1f1'),
  footerBgColor: darken(0.3,  '#f1f1f1'),
};
