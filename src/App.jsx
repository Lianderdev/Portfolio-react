import { Header } from './sections/Header'
import { Home } from './sections/Home'
import { Education } from './sections/Education'
import { Footer } from './sections/Footer'
import { Tools } from './sections/Tools'
import { Contact } from './sections/Contact'
import { Projects } from './sections/Projects'

export function App() {
  return (
    <>
        <Header/>
        <main>
            <Home />
            <Tools />
            <Projects />
            <Education />
            <Contact />
        </main>
        <Footer />
    </>
  )
}
