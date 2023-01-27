import '@/styles/globals.css'
import appWrapper from '@/components/appWrapper'

export default function App({ Component, pageProps }) {
  return(
    <appWrapper>
      <Component {...pageProps} />
    </appWrapper>
  )
}
