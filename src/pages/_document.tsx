import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { ServerStyles, createStylesServer } from '@mantine/next';
import { cache } from "../utils/cache";

const stylesServer = createStylesServer(cache);
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Coolvetica.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
