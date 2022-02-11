import { grommet } from 'grommet/themes'
import {
  deepMerge,
  // normalizeColor,
} from 'grommet/utils'
// import { getNormalizedColor } from 'grommet/utils/color'
// import { css } from 'styled-components'

export const grommetTheme = deepMerge(grommet, {
  name: 'quid-theme',
  rounding: 8,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        dark: '#5700ed',
        light: '#5700ed',
      },
      gradient: {
        // light: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        light:
          'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)',
        dark: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      'gradient-background': {
        dark: 'linear-gradient(180deg, rgb(32 34 49) 5%, rgb(22 24 29) 15%, #000 100%)',
        light: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      },
      background: {
        dark: '#111111',
        // dark: 'linear-gradient(#e66465, #9198e5)',
        // dark: css`linear-gradient(90deg, rgb(50.588% 99.608% 91.373%) 0%, rgb(50.559% 99.609% 91.772%) 6.25%, rgb(50.473% 99.613% 92.974%) 12.5%, rgb(50.328% 99.62% 94.988%) 18.75%, rgb(50.126% 99.629% 97.828%) 25%, rgb(49.865% 97.767% 99.641%) 31.25%, rgb(49.547% 93.235% 99.656%) 37.5%, rgb(49.171% 87.801% 99.674%) 43.75%, rgb(48.736% 81.427% 99.695%) 50%, rgb(48.243% 74.067% 99.72%) 56.25%, rgb(47.691% 65.67% 99.748%) 62.5%, rgb(47.08% 56.177% 99.779%) 68.75%, rgb(47.297% 46.411% 99.815%) 75%, rgb(57.721% 45.682% 99.854%) 81.25%, rgb(69.335% 44.894% 99.898%) 87.5%, rgb(82.221% 44.045% 99.947%) 93.75%, rgb(96.471% 43.137% 100%) 100% )`,
        light: '#FFFFFF',
        // dark: `linear-gradient(90deg, rgb(26.667% 26.667% 26.667%) 0%, rgb(21.973% 21.973% 21.973%) 6.25%, rgb(17.865% 17.865% 17.865%) 12.5%, rgb(14.303% 14.303% 14.303%) 18.75%, rgb(11.25% 11.25% 11.25%) 25%, rgb(8.665% 8.665% 8.665%) 31.25%, rgb(6.51% 6.51% 6.51%) 37.5%, rgb(4.746% 4.746% 4.746%) 43.75%, rgb(3.333% 3.333% 3.333%) 50%, rgb(2.233% 2.233% 2.233%) 56.25%, rgb(1.406% 1.406% 1.406%) 62.5%, rgb(0.814% 0.814% 0.814%) 68.75%, rgb(0.417% 0.417% 0.417%) 75%, rgb(0.176% 0.176% 0.176%) 81.25%, rgb(0.052% 0.052% 0.052%) 87.5%, rgb(0.007% 0.007% 0.007%) 93.75%, rgb(0% 0% 0%) 100% )`,
      },
      'background-back': {
        // dark: '#222222',
        dark: 'rgb(22 21 34)',
        light: '#EEEEEE',
      },
      'background-front': {
        // dark: '#2e2e2e',
        dark: 'rgb(32 34 49)',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      text: {
        light: '#333333',
        dark: '#ffffff',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        dark: 'text-xweak',
        light: 'text-xweak',
        // dark: css`linear-gradient(90deg, rgb(50.588% 99.608% 91.373%) 0%, rgb(50.559% 99.609% 91.772%) 6.25%, rgb(50.473% 99.613% 92.974%) 12.5%, rgb(50.328% 99.62% 94.988%) 18.75%, rgb(50.126% 99.629% 97.828%) 25%, rgb(49.865% 97.767% 99.641%) 31.25%, rgb(49.547% 93.235% 99.656%) 37.5%, rgb(49.171% 87.801% 99.674%) 43.75%, rgb(48.736% 81.427% 99.695%) 50%, rgb(48.243% 74.067% 99.72%) 56.25%, rgb(47.691% 65.67% 99.748%) 62.5%, rgb(47.08% 56.177% 99.779%) 68.75%, rgb(47.297% 46.411% 99.815%) 75%, rgb(57.721% 45.682% 99.854%) 81.25%, rgb(69.335% 44.894% 99.898%) 87.5%, rgb(82.221% 44.045% 99.947%) 93.75%, rgb(96.471% 43.137% 100%) 100% )`,
        // light:
        //   'linear-gradient(90deg, rgb(50.588% 99.608% 91.373%) 0%, rgb(50.559% 99.609% 91.772%) 6.25%, rgb(50.473% 99.613% 92.974%) 12.5%, rgb(50.328% 99.62% 94.988%) 18.75%, rgb(50.126% 99.629% 97.828%) 25%, rgb(49.865% 97.767% 99.641%) 31.25%, rgb(49.547% 93.235% 99.656%) 37.5%, rgb(49.171% 87.801% 99.674%) 43.75%, rgb(48.736% 81.427% 99.695%) 50%, rgb(48.243% 74.067% 99.72%) 56.25%, rgb(47.691% 65.67% 99.748%) 62.5%, rgb(47.08% 56.177% 99.779%) 68.75%, rgb(47.297% 46.411% 99.815%) 75%, rgb(57.721% 45.682% 99.854%) 81.25%, rgb(69.335% 44.894% 99.898%) 87.5%, rgb(82.221% 44.045% 99.947%) 93.75%, rgb(96.471% 43.137% 100%) 100% )',
      },
      control: {
        light: '#4000bb',
        dark: '#bb94ff',
      },
      'active-background': {
        light: 'background',
        dark: 'background',
      },
      'active-text': {
        light: 'text-strong',
        dark: 'text-strong',
      },
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#dd3000',
      'status-warning': '#f0c954',
      'status-ok': '#008375',
      'status-unknown': '#C3C5C8',
      'status-disabled': '#C3C5C8',
      'graph-0': 'brand',
      'graph-1': 'blue',
      green: {
        dark: '#d5d848',
        light: '#d5d848',
      },
      'green!': '#d5d848',
      blue: {
        dark: '#9fd4c9',
        light: '#004876',
      },
      'blue!': '#9fd4c9',
      grey: {
        dark: '#646569',
        light: '#646569',
      },
      'grey!': '#646569',
      'graph-2': 'green',
      focus: {
        dark: 'rgba(246,110,255,1)',
        light: 'rgba(246,110,255,1)',
      },
    },
    font: {
      family: '"Inter"',
      face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhjp-Ek-_EeAmM.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v7/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Space Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE58RXi4EwSsbg.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Space Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE98RXi4EwSsbg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Space Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYEF8RXi4EwQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
    borderSize: {
      none: '0px',
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '12px',
      xlarge: '24px',
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: {
        value: 1536,
      },
      large: {},
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '6px',
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      responsiveBreakpoint: 'small',
    },
    input: {
      padding: '12px',
      weight: 600,
    },
    spacing: '24px',
    size: {
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
    },
    control: {
      border: {
        radius: '8px',
      },
    },
    drop: {
      border: {
        radius: '8px',
      },
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
  email: 'eric.soderberg@hpe.com',
  date: '2020-02-14T21:38:28.000Z',
  heading: {
    level: {
      '1': {
        small: {
          size: '23px',
          height: '29px',
          maxWidth: '547px',
        },
        medium: {
          size: '28px',
          height: '34px',
          maxWidth: '662px',
        },
        large: {
          size: '37px',
          height: '43px',
          maxWidth: '893px',
        },
        xlarge: {
          size: '47px',
          height: '53px',
          maxWidth: '1123px',
        },
      },
      '2': {
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '518px',
        },
        medium: {
          size: '25px',
          height: '31px',
          maxWidth: '605px',
        },
        large: {
          size: '29px',
          height: '35px',
          maxWidth: '691px',
        },
        xlarge: {
          size: '32px',
          height: '38px',
          maxWidth: '778px',
        },
      },
      '3': {
        small: {
          size: '20px',
          height: '26px',
          maxWidth: '490px',
        },
        medium: {
          size: '23px',
          height: '29px',
          maxWidth: '547px',
        },
        large: {
          size: '25px',
          height: '31px',
          maxWidth: '605px',
        },
        xlarge: {
          size: '28px',
          height: '34px',
          maxWidth: '662px',
        },
      },
      '4': {
        small: {
          size: '19px',
          height: '25px',
          maxWidth: '461px',
        },
        medium: {
          size: '20px',
          height: '26px',
          maxWidth: '490px',
        },
        large: {
          size: '22px',
          height: '28px',
          maxWidth: '518px',
        },
        xlarge: {
          size: '23px',
          height: '29px',
          maxWidth: '547px',
        },
      },
      '5': {
        small: {
          size: '17px',
          height: '23px',
          maxWidth: '418px',
        },
        medium: {
          size: '17px',
          height: '23px',
          maxWidth: '418px',
        },
        large: {
          size: '17px',
          height: '23px',
          maxWidth: '418px',
        },
        xlarge: {
          size: '17px',
          height: '23px',
          maxWidth: '418px',
        },
      },
      '6': {
        small: {
          size: '17px',
          height: '23px',
          maxWidth: '403px',
        },
        medium: {
          size: '17px',
          height: '23px',
          maxWidth: '403px',
        },
        large: {
          size: '17px',
          height: '23px',
          maxWidth: '403px',
        },
        xlarge: {
          size: '17px',
          height: '23px',
          maxWidth: '403px',
        },
      },
    },
  },
  scale: 0.3,
  button: {
    border: {
      radius: '8px',
    },
    // default: {
    //   background: {
    //     color: 'blue',
    //   },
    // },
    // primary: {
    //   background: {
    //     color: 'gradient',
    //   },
    // },
    size: {
      large: {
        // primary: {
        //   background: {
        //     color: 'gradient',
        //   },
        // },
        border: {
          width: '0px',
          radius: '8px',
        },
      },
      medium: {
        border: {
          width: '0px',
          radius: '8px',
        },
      },
      small: {
        font: {
          size: '9px',
        },
        border: {
          width: '0px',
          radius: '8px',
        },
        pad: {
          horizontal: '10px',
          vertical: '2px',
        },
      },
    },
  },
  calendar: {
    small: {
      fontSize: '16.8px',
      lineHeight: 1.375,
      daySize: '27.43px',
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
    },
    large: {
      fontSize: '21.6px',
      lineHeight: 1.11,
      daySize: '109.71px',
    },
  },
  checkBox: {
    size: '24px',
    toggle: {
      radius: '8px',
      size: '48px',
    },
    check: {
      radius: '8px',
    },
  },
  clock: {
    analog: {
      hour: {
        width: '8px',
        size: '24px',
      },
      minute: {
        width: '4px',
        size: '12px',
      },
      second: {
        width: '3px',
        size: '9px',
      },
      size: {
        small: '72px',
        medium: '96px',
        large: '144px',
        xlarge: '216px',
        huge: '288px',
      },
    },
    digital: {
      text: {
        xsmall: {
          size: '15.6px',
          height: 1.5,
        },
        small: {
          size: '16.8px',
          height: 1.43,
        },
        medium: {
          size: '18px',
          height: 1.375,
        },
        large: {
          size: '19.2px',
          height: 1.167,
        },
        xlarge: {
          size: '20.4px',
          height: 1.1875,
        },
        xxlarge: {
          size: '22.8px',
          height: 1.125,
        },
      },
    },
  },
  paragraph: {
    small: {
      size: '17px',
      height: '23px',
      maxWidth: '418px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '19px',
      height: '25px',
      maxWidth: '461px',
    },
    xlarge: {
      size: '20px',
      height: '26px',
      maxWidth: '490px',
    },
    xxlarge: {
      size: '23px',
      height: '29px',
      maxWidth: '547px',
    },
  },
  radioButton: {
    size: '24px',
    check: {
      radius: '8px',
    },
  },
  text: {
    xsmall: {
      size: '17px',
      height: '23px',
      maxWidth: '403px',
    },
    small: {
      size: '17px',
      height: '23px',
      maxWidth: '418px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '19px',
      height: '25px',
      maxWidth: '461px',
      // weight: '100',
    },
    xlarge: {
      size: '20px',
      height: '26px',
      maxWidth: '490px',
    },
    xxlarge: {
      size: '23px',
      height: '29px',
      maxWidth: '547px',
    },
  },
  anchor: {
    color: 'text',
    hover: { textDecoration: 'none', fontWeight: 'bold' },
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
      position: 'inner',
      side: 'bottom',
    },
    content: {
      pad: 'small',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium',
      },
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    help: {
      color: 'dark-3',
      margin: {
        start: 'small',
      },
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    margin: {
      bottom: 'small',
    },
    round: '8px',
  },
  tab: {
    color: 'text-weak',
    border: {
      side: 'bottom',
      size: 'xsmall',
      color: {
        dark: 'none',
        light: 'brand',
      },
      active: {
        color: {
          dark: 'text-weak',
          light: 'text-weak',
        },
      },
      hover: {
        color: {
          dark: 'white',
          light: 'black',
        },
        // extend: undefined,
      },
    },
  },
  round: '0px',

  // textInput: {
  //   placeholder: {
  //     color: 'text-weak',
  //   },
  //   // color: 'text-weak',
  //   // extend: () =>
  //   //   css`
  //   //     background-color: #555;
  //   //   `,
  //   // placeholder: {
  //   //   extend: () => `color: #44444`,
  //   // },
  // },

  /*
  ./. Globals
   */
  // border: {
  //   width: '0px',
  //   radius: '8px',
  // },
  // padding: {
  //   vertical: '4px',
  //   horizontal: '22px',
  // },
  // default: {},
  // primary: {
  //   background: 'brand',
  //   // background: 'gradient',
  //   color: 'text',
  // },
  // hover: {
  //   default: {},
  //   primary: {
  //     background: '#fff',
  //     color: 'text-weak',
  //   },
  // },
  // @ts-ignore
  // extend: ({ theme }) =>
  //   css`
  //     transition: all 0.2s;
  //     :hover {
  //       transition: all 0.2s;
  //       // background: ${normalizeColor('gradient', theme)};
  //     }
  //     //background-color: blue;
  //   `,
  // },
})
