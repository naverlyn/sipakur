import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
    return (
        <Html data-theme="light">
            <Head />
            <body className="w-full h-screen">
                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
    );
}