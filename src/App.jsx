import { Header } from './components/Header'
import { Home } from './components/Home'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Tools } from './components/Tools'
import { Contact } from './components/Contact'

export function App() {
  return (
    <>
        <Header/>
        <main>
            <Home />
            <Tools />
            <Education />
            <Contact />
        </main>
        <Footer />
    </>
  )
}
