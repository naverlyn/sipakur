import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html data-theme="light">
            <Head />
            <body className="w-full h-full bg-hero-overlapping-circles-donker bg-cyan-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}