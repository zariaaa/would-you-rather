import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, authedUser , location, ...rest }) => {
    if(authedUser === null){
        localStorage.setItem('pathname' , location.pathname);
    }

    return (
        <Route
        {...rest}
        render={props =>
            authedUser !== null ? (
            <Component {...props} />
            ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
        />
    )
}