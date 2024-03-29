import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Post, Write } from './pages'
import { Error } from './pages/status'
import { Layout } from './components/common'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={''} element={<Main />} />
          <Route path={'post/:id'} element={<Post />} />
          <Route path={'write'} element={<Write />} />
          <Route path={'*'} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
