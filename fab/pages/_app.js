import '../styles/globals.css'
import Layout from '../components/layout'
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
