const unit = 4

const ThemeLight = {
    // Space
    space: [
        0, unit, unit * 2,
        unit * 3,
        unit * 4,
        unit * 5,
        unit * 6,
        unit * 7,
        unit * 8,
        unit * 9,
        unit * 10,
        unit * 11,
        unit * 12
    ],
    // Color
    colors: {
        // Neutrals
        white: '#FFF',
        grey50: '#FCFCFC',
        grey100: '#EBEBEB',
        grey150: '#5E5E5E',
        grey200: '#FFF',
        grey250: '#737373',
        grey300: '#A6A6A6',
        grey350: '#C2C2C2',
        grey400: '#FFF',
        grey450: '#4D4D4D',
        grey500: '#FCFCFC',
        grey550: '#D9D9D9',
        grey600: '#EBEBEB',
        grey650: '#A6A6A6',
        black: '#000',
        // Reds
        red50: '#FF5266',
        red100: '#EA384C',
        red250: '#FA233B',
        red300: '#C92C3F',
        // Oranges
        orange50: '#E89153',
        orange100: '#FF542E',
        orange250: '#D44F33',
        // Yellows
        yellow50: '#FACB4B',
        yellow100: '#C28F0E',
        // Green
        green50: '#2AD986',
        green100: '#27D86E',
        green250: '#109155',
        // Blues
        blue50: '#6BB0FF',
        blue100: '#3490EB',
        blue250: '#178DF7',
        blue300: '#3B79C3',
        // Purples
        purple50: '#AE94FF',
        purple100: '#8E66FF',
        purple250: '#7868BE',
        // Pinks
        pink50: '#E437FF',
        pink100: '#B5518C'
    },

    // Typography
    fontSizes: [
        8,
        10,
        11,
        12,
        14,
        16,
        18
    ],
    fonts: {
        inter: 'Inter UI'
    },
    lineHeights: [
        0, '12px', '16px', '20px'
    ],
    weights: [
        500, 500, 600
    ],
    textStyles: {
        t1: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 500
        },
        t2: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 600
        },
        t3: {
            fontSize: '12px',
            lineHeight: '12px',
            fontWeight: 600
        }
    },

    // Borders
    borders: [
        0, 1, 2, 3
    ],

    // Misc
    radii: [
        0, 2, 3
    ],
    // WIP
    shadows: [
        0, 'rgba(0, 0, 0, 0.4) 0px 0px 24px 0px, rgba(0, 0, 0, 0.4) 0px 2px 4px 0'
    ],
    opacity: [
        0, 1 / 4,
        1 / 2,
        3 / 4,
        1
    ],
    motion: {
        fast: '100ms ease',
        fastEntry: '100ms ease-out',
        fastExit: '100mms ease-in',
        defaultSlow: '150ms ease',
        medium: '150ms ease',
        mediumEntry: '150ms ease',
        mediumExit: '150ms ease',
        slow: '200ms ease',
        slowExit: '200ms ease',
        slowEntry: '200ms ease'
    },
    hoverStates: {
        lightenHover: {
            '&:hover': {
                filter: 'brightness(1.05)'
            }
        }
    },
    activeStates: {
        darkenActive: {
            '&:active': {
                filter: 'brightness(.95) saturate(1.1)'
            }
        }
    },
    focusStates: {
        focused: {
            '&:focus': {
                zIndex: 2,
                outline: 0,
                borderColor: '#178DF7'
            }
        },
        murderedFocused: {
            '&:focus': {
                zIndex: 2,
                outline: 0,
                borderColor: '#178DF7',
                backgroundColor: '#FCFCFC'
            }
        }
    }
}

export default ThemeLight
