import { Paper, Stack } from '@mui/material'
import Footer from './footer'
import { Outlet } from 'react-router'
import { createContext } from 'react'
import AppHeader from './appheader'

export interface User {
  loggedIn: boolean,
  userName: string | null
}


export const User = createContext<User>({ loggedIn: false, userName: "null" });

function App() {
  return (
    <>
      <User.Provider value={{ loggedIn: true, userName:null}}>
        <AppHeader />
        <Paper className='t-background' sx={{ backgroundColor: "#242424" }} >
          <Stack direction='column' height='auto' minHeight='100%' justifyContent='space-between'>
            <Outlet />
            <Footer />
          </Stack>
        </Paper>
      </User.Provider>
    </>
  )
}

export default App
