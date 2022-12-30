import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
// getStaticProps => vai gerar estatico em build time
// getServerSideProps => vai gerar vis ssr a cada request
// getInicialProps => vai gerar vis ssr a cada request
export function getServerSideProps() {
  // aqui cria a lógica, como buscar dados de uma api, fazer calculo de context e

  // aqui temos o retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
// ATENÇÃO
// os metodos getStati cProps/getServerSideProps SÓ FUNCIONAM EM PAGES
