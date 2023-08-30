import {
    AppBar,
    Toolbar,
    Box,
    Menu,
    Button,
    Grid,
    createTheme,
    ThemeProvider,
    CssBaseline,
    Typography,
    Avatar,
    IconButton,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
const NavigationBar = () => {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window !== "undefined") {
            const protocol = window.location.protocol;
            const host = window.location.host;
            const currentOrigin = `${protocol}//${host}`;
            setOrigin(currentOrigin);
        }
    }, []);

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const userImg = user ? user.picture : "";

    return (
        <AppBar position="sticky">
            <Toolbar>
                <img
                    style={{ margin: "10px", height: "50px" }}
                    src="/images/printer.png"
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Backoffice
                </Typography>
                <Box>
                    <Avatar src={userImg} />
                </Box>
                <Box>
                    <Button
                        color="secondary"
                        onClick={() => {
                            if (isAuthenticated) {
                                logout();
                            } else {
                                loginWithRedirect();
                            }
                        }}
                    >
                        {isAuthenticated ? "Logout" : "Login"}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
