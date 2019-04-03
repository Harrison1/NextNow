import fetch from 'isomorphic-unfetch'
import App from '../containers/App'
import endpoints from '../config'

const Index = props => 
  <App content={ props.content } />

Index.getInitialProps = async () => {
  // const resContent = await fetch(`${endpoints.dev}wp-json/wp/v2/posts/?_embed`)
  const resContent = await fetch(`${endpoints.dev}wp-json/wp/v2/landing_page/?slug=coding-landing&_embed`)
  const content = await resContent.json()
  return { content }
}

export default Index
