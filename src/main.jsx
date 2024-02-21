import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx'
import Login from './components/admin/Login.jsx'
import AdminHome from './components/admin/AdminHome.jsx'
import Meeting from './meeting/Meeting.jsx'
import BusinessDeta from './components/businessDeta/BusinessDeta.jsx'
import EditBusinessDeta from './components/businessDeta/EditBusinessDeta.jsx'
import ServicesList from './services/ServicesList.jsx'
import MeetingList from './meeting/MeetingList.jsx'
import Service from './services/Service.jsx'
import AddMeeting from './meeting/AddMeeting.jsx'

const routesArray = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error page</div>
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/adminHome',
    element: <AdminHome />,
  },
  {
    path: '/meeting',
    element: <Meeting />,
  },
  {
    path: '/EditBusinessDeta',
    element: <EditBusinessDeta />,
  },
  {
    path: '/meetingList',
    element: < MeetingList/>,
  },
  {
    path: '/servicesList',
    element: < ServicesList/>,
  },
  {
    path: '/service',
    element: < Service/>,
  },
  {
    path: '/addMeeting',
    element: < AddMeeting/>,
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode>
    <RouterProvider router={routesArray} />
  </React.StrictMode>,

)
