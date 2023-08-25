import Head from 'next/head';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>
        {title}
        {title && ' -'}&nbsp;Aview International
      </title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon/favicon-16x16.png"
      />
    </Head>
  );
};

export default PageTitle;
