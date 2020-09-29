import Container from './container'
import ThemeSwitch from '../components/themeswitch'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-7 text-center">
          <span className="font-bold leading-tight mb-10 lg:mb-0 lg:pr-4">
            Iets met een footer
          </span>
        </div>
      </Container>      
      <ThemeSwitch />
    </footer>
  )
}
