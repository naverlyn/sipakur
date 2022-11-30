import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html data-theme="light">
            <Head />
            <body className="w-full h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}