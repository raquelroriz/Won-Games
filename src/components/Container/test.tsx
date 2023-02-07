import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    // use o Inline quando a parte que precisa testar é pequena, primeiro coloque
    // apenas o comando toMatchInlineSnapshot() que depois de rodar o teste ele
    // preenche sozinho a parte do css
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        widht: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
