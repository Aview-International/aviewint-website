import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="m-0 overflow-x-hidden scroll-smooth p-0" lang="en">
        <Head>
          <link rel="canonical" href="https://aviewint.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            defer
            data-domain="aviewint.com"
            src="https://plausible.io/js/script.js"
          ></script>
          {/* facebook verification check */}
          <meta
            name="facebook-domain-verification"
            content="b8jfsyf1a6pj9m8s2nsoo5dr55zmta"
          />
        </Head>
        <body className="transition-300 relative m-0 min-h-screen overflow-hidden overflow-x-hidden bg-black p-0 font-overpass">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
