import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(
      screen.getByRole('heading', { name: "Daymon's", level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: "Logo de Daymon's" })
    ).toHaveAttribute('src', '/daymons.jfif')
    expect(screen.getByRole('heading', { name: 'Écouter' })).toBeInTheDocument()
    expect(
      screen.getByText(/Pas de concert annoncé pour le moment/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'axel.duval@gmail.com' })
    ).toHaveAttribute('href', 'mailto:axel.duval@gmail.com')

    expect(container.firstChild).toBeInTheDocument()
  })
})
