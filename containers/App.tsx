import * as React from 'react'
import Hero from 'trilogycomponents/core/Hero';
import HeroContent from 'trilogycomponents/core/HeroContent';

type Props = {
  content?: object,
}

const App: React.FunctionComponent<Props> = ({ content }) => {
  console.log(content)

  return (
    <>
      <Hero
        backgroundImg={'http://4.bp.blogspot.com/-R22-Cz-hZhM/UPUdbM4MlTI/AAAAAAAACbo/pfKkU98fSyE/s1600/wall-e-and-eve-best-wallpaper.jpg'}
      >
        <HeroContent
          title="Etiam Dolor Ac Ligula Laoreet Porta"
          leadText="QUISQUE SAGITTIS LOBORTIS LOREM SAGITTIS"
          dateText="Pellentesque volutpat felis ante. Pellentesque volutpat felis ante."
        />
      </Hero>
    </>
  )
}

export default App
