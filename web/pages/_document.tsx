import Document, {Html, Head, Main, NextScript} from 'next/document'

class AppDocument extends Document {
    render(): JSX.Element {
        return <Html lang="ru">
            <Head>
                <meta name="description" content="Сервис позволяет загружать снимки КТ, МРТ или анализы и моментально получать вероятность возможных заболеваний с точностью до 93%"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    }
}

export default AppDocument