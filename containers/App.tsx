import * as React from 'react'
import LandingHero from '../components/LandingHero'

interface Props {
  content?: [];
}

const App: React.FunctionComponent<Props> = ({ content }) => (
  <>
    <LandingHero content={content[0].acf} />
  </>
)

export default App
