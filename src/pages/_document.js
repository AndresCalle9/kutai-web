import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css" />
          <meta name="facebook-domain-verification" content="4qf5st1dgsqq73nijfvnzq42oib9of" />
          <title>Kutai</title>
          <meta name="description" content="KutAi: is an Ai powered guide that helps you take the best food
          choices towards a healthier life."></meta>
          <meta name="google-site-verification" content="hiRypgwb4NIE31zC4ZD-M8UZJo5qxfGUT3conNLGS0k" />
          <meta property="og:url" content="https://kutai.co" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kutai" />
          <meta property="og:description" content="KutAi: is an Ai powered guide that helps you take the best food
          choices towards a healthier life" />
          <meta property="og:image" content="https://kutai.co/logoBlanco.png" />
          <meta property="fb:app_id" content="368546701308259" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument