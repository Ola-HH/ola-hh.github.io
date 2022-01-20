import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { Button } from "@mui/material";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="text" className="ml-auto" onClick={() => handleLogin(instance)} sx={{
            position: "absolute", right: 5
        }}>Logg inn</Button>
    );
}