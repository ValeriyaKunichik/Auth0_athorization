import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="button-71 login" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton