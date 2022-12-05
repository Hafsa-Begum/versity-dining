import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
    // <Routes>
    //     <Route path="/" element={ <Home/> } />
    //     <Route path="about" element={ <About/> } />
    //     <Route path="contact" element={ <Contact/> } />
    //     <Route path="login" element={ <LoginSignUp/> } />
    //     <Route path="*" element={ <Error/> } />
    //   </Routes>
  );
}

export default App;
