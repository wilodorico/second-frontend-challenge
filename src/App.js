import { useState } from 'react'
import CardForm from './components/CardForm'
import CardThankYou from './components/CardThankYou'
import Footer from './components/Footer'
import Layout from './UI/Layout'

const App = () => {
  const [noteSelected, setNoteSelected] = useState()
  const [isSubmited, setIsSubmited] = useState(false)

  const submitHandler = (note) => {
    setNoteSelected(note)
    setIsSubmited(true)
  }

  return (
    <Layout>
      {!isSubmited && <CardForm onSubmited={submitHandler} />}
      {isSubmited && <CardThankYou note={noteSelected} />}
      <Footer />
    </Layout>
  )
}

export default App
