export const fonts = {
  primary: `'Ubuntu', sans-serif`,
  secondary: `"Roboto", sans-serif`,
  third: `"Playfair Display", serif`,
};

export const typography = {
  text: {
    xs: `
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.5rem;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    `,
    lgx: `
    font-size: 1.1rem;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    xss: `
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 3rem;
    `,
    lgx: `
    font-size: 3rem;
    line-height: 2.2rem;
    `,
    xl: `
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,
    xxl: `
    font-size: 3rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography.text) {
  typography.text[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  font-weight: 600;
  `;
}

export const typography2 = {
  text: {
    xs: `
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.41rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    xss: `
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,
    xl: `
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,
    xxl: `
    font-size: 3rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography2.head) {
  typography2.head[size] += `
  font-family: ${fonts.secondary};
  font-weight: 600;
  `;
}

for (const size in typography2.text) {
  typography2.text[size] += `
  font-family: ${fonts.secondary};
  `;
}

export const typography3 = {
  text: {
    xs: `
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.41rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    xss: `
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.3rem;
    line-height: 3rem;
    `,
    xl: `
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,
    xxl: `
    font-size: 3rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography3.head) {
  typography3.head[size] += `
  font-family: ${fonts.third};
  font-weight: 600;
  `;
}

for (const size in typography3.text) {
  typography3.text[size] += `
  font-family: ${fonts.third};
  `;
}
