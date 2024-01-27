import React from 'react';
import {
  useRoutes,
} from 'react-router-dom'
import SignInSide from './pages/SignInSide'
import SignIn from './pages/SignIn'
import InitInfo from './pages/InitInfo'
import SignUp from './pages/SignUp';
import SignUpMessage from './pages/SignUpMessage'
import './styles/Map.css'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <SignInSide/>
    },
    {
      path: '/sign-up',
      element: <SignUp/>
    },
    {
      path: '/sign-in/:frs/:snd/',
      element: <SignIn/>
    },
    {
      path: '/init-info',
      element: <InitInfo/>
    },
    {
      path: '/sign-up-messg',
      element: <SignUpMessage/>
    },
  ])

  return (
    routes
  );
}

export default App;
