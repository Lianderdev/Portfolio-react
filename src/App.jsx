import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Education } from './components/Education/Education'
import { Footer } from './components/Footer/Footer'
import { Tools } from './components/Tools/Tools'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Project/Projects'



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
