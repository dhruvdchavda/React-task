import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Auth/login";
import Registration from "./Auth/registration";
import UserDashboard from "./User/userDashboard";
import ViewProfile from "./User/viewProfile";
import UserList from "./Admin/userList";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h3" component="h3" sx={{ mb: 4 }}>
        Welcome to my React.js Task!
      </Typography>
      <Typography variant="h6" component="h6" sx={{ mb: 4 }}>
        Already have an account? <Link to="/login">Sign in</Link>
      </Typography>
      <Typography variant="h6" component="h6" sx={{ mb: 4 }}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </Typography>
    </div>
  );
};

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/user" element={<UserDashboard />}></Route>
          <Route path="/userprofile" element={<ViewProfile />}></Route>
          <Route path="/allusers" element={<UserList />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
