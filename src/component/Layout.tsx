import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    AppBar,
    Toolbar,
    Box,
    Menu,
    Button,
    Grid,
    Typography,
    IconButton,
} from "@mui/material";
import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

const useTheme = createTheme({
    palette: {
        primary: {
            main: "#1e90ff",
        },
        secondary: {
            main: "#212121",
        },
    },
});

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={useTheme}>
            <CssBaseline />
            <NavigationBar />
            <Grid component={"main"}>
                <Box margin={3}>{children}</Box>
            </Grid>
        </ThemeProvider>
    );
};

export default Layout;
