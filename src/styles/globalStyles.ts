import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --white: hsl(0, 0%, 100%);
    --red: hsl(14, 86%, 42%);
    --green: hsl(159, 69%, 38%);
    
    --rose-50: hsl(20, 50%, 98%);
    --rose-100: hsl(13, 31%, 94%);
    --rose-300: hsl(14, 25%, 72%);
    --rose-400: hsl(7, 20%, 60%);
    --rose-500: hsl(12, 20%, 44%);
    --rose-900: hsl(14, 65%, 9%);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
}

body {
    height: 100vh;
    width: 100%;
    background-color: var(--rose-50);
}

h1 {
    font-size: 28px;
    line-height: 100%;
}

.red {
    color: var(--red);
}

.dark-rose {
    color: var(--rose-900);
}

.medium-rose {
    color: var(--rose-500);
}

.light-rose {
    color: var(--rose-400);
}

.very-light-rose {
    color: var(--rose-100);
}

.sm {
    font-size: 10px;
    line-height: 100%;
}

.md {
    font-size: 12px;
    line-height: 100%;
}

.base {
    font-size: 14px;
    line-height: 100%;
}

.lg {
    font-size: 20px;
    line-height: 100%;
}

.xl {
    font-size: 32px;
    line-height: 100%;
}

.medium {
    font-weight: 500;
}

.bold {
    font-weight: 700;
}
`;

export default GlobalStyles;
