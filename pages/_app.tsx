// Global import of my styles
import { UIProvider } from "../components/contexts/UIContext"
import "../styles/globals.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}
