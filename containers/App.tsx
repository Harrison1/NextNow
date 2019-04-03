import * as React from 'react'

type Props = {
  content?: object,
}

const App: React.FunctionComponent<Props> = ({ content }) => {
  console.log(content)

  return (
    <h1>Hello Galaxy</h1>
  )
}

export default App
