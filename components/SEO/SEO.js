import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three simple steps to increase your international viewership. 1. Select from our translations or voiceover services 2. Indicate what languages would work best for you 3. Receive 100% accurate translations or voice-overs within 48 hours, edited and ready to be posted',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIEW offers Subtitles Translations, Voiceover Translations, and Short-form Content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who have you worked with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have been generating AVIEW for Logan Paul, Mark Rober, YesTheory, Ninja, Vitalyzdtv, Active Self Protection, Saud Brothers, Amanda Cerny, Marlin and many more! AVIEW has helped these creators expand into international markets and become known worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIEW creates a pricing plan for each creator. We ensure that you see a return on our services! If you would like a quote, please click here!',
      },
    },
  ],
};

const SEO = ({ title, description, image = '/images/og-image.png' }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="keywords" content="Video Translation & Subtitling" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`www.aviewint.com${path}`} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`www.aviewint.com${path}`} />
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
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="gtag"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-MNQ5EGQKS8`}
      />
      <Script
        id="gtag-manager"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MNQ5EGQKS8', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
       window.intercomSettings = {
         api_base: "https://api-iam.intercom.io",
         app_id: "k1i5e90c"
       };
      `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/k1i5e90c'
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/k1i5e90c';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `,
        }}
      />
      {path === '/' && (
        <Script
          id="application/ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      )}
    </>
  );
};

export default SEO;
