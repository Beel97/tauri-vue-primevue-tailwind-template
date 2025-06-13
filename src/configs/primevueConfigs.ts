import Aura from '@primevue/themes/aura';
import customPrimeTheme from './customPrimeTheme'
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Aura, customPrimeTheme);
export default {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark-mode-selector',
            cssLayer: false
        }
    },
  ripple: true
 }

