import { Paper } from "@mui/material";
import { Link } from "react-router";

export default function Card(){
    return  <Paper className='t-card'>
            <Link to=''>Home</Link>
            <br></br>
            <Link to='/account'>Account</Link>
          </Paper>
}