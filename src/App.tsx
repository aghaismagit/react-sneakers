import { Header } from "./components/UI/Header/MainHeader"
import { AppRouter } from "./helpers/router"
import { type FC } from "react"
import { useAppHook } from "@/helpers/hooks/useAppHook"

const App: FC = () => {
  useAppHook()

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
