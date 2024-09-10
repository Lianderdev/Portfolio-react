import { Header } from './components/Header'
import { Home } from './components/Home'
import { Education } from './components/Education'
import { Footer } from './components/Footer'




export function App() {
  return (
    <>
        <Header/>

        <main>
            <Home />
            <Education />
        </main>
        
        <Footer />
    </>
  )
}
