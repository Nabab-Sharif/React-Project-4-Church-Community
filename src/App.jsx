
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Banner from './pages/banner/Banner';
import Relevant from './pages/relevant/Relevant';
import Love from './pages/love/Love';
import Benefit from './pages/benefit/Benefit';
import JoinUs from './pages/joinUs/JoinUs';
import Visit from './pages/visit/Visit';
import Blog from './pages/blog/Blog';
import Error from './component/Error';



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Banner />} />
          <Route path="/relevant" element={<Relevant />} />
          <Route path="/love" element={<Love />} />
          <Route path="/benefits" element={<Benefit />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        <Route path="*" element={<Error />} />

      </>
    )

  )




  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
