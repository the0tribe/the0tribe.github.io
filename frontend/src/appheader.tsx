import { AppBar, Avatar, Stack } from "@mui/material";
import { User } from "./App";
import { useContext } from "react";
import { Link } from "react-router";

export default function AppHeader() {
    const user = useContext(User);
    return <AppBar className='t-appbar'>
        <Stack direction='row' justifyContent='space-between'>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>
            <b>
                The Tribe
            </b>
            </Link>
            <Avatar src='/broken-image.jpg'  sx={user.loggedIn?{backgroundColor:"green"}:{}}>{user.userName}</Avatar>
        </Stack>
    </AppBar>
}