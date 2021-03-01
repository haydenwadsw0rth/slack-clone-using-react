import React from 'react'
import styled from "styled-components";
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="" />
                <h1>Get Started</h1>
                <p>Slack Clone</p>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
                <h3>Created using React</h3>
                <h3>By Hayden Wadsworth</h3>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0,0,0, 0.09), 0 1px 2px rgba(0,0,0, 0.10);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > Button {
        margin-top: 50px;
        margin-bottom: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: #fff;
    }

    > p {
        font-size: 16px;
    }

    > h3 {
        font-size: 10px;
        color: gray;
        font-weight: 300;
    }
`;