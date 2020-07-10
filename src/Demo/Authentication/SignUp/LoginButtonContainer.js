import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { browserHistory } from 'react-router';

import { uport } from '../../../util/connectors';
const mapStateToProps = (state, ownProps) => {
    return {}
}

export const USER_LOGGED_IN = 'USER_LOGGED_IN'


function userLoggedIn(user) {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onLoginUserClick: (event) => {
            uport.requestCredentials().then((credentials) => {
                dispatch(userLoggedIn(credentials))

                var currentLocation = browserHistory.getCurrentLocation()

              if ('redirect' in currentLocation.query)
                {
                  //  return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
                }

                 browserHistory.push('/dashboard/default');

                window.location.reload();

            })

        }

    }
}

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButton)

export default LoginButtonContainer
