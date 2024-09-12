import { Header } from './components/Header'
import { Home } from './components/Home'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Tools } from './components/Tools'

export function App() {
  return (
    <>
        <Header/>
        <main>
            <Home />
            <Tools />
            <Education />
        </main>
        <Footer />
    </>
  )
}
