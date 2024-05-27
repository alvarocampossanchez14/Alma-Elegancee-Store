
import PropTypes from 'prop-types';

export const AuthResponseErrorPropType = PropTypes.shape({
  body: PropTypes.shape({
    error: PropTypes.string.isRequired,
  }).isRequired,
});

export const UserPropType = PropTypes.shape({
  __id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string,
});

export const AuthResponsePropType = PropTypes.shape( {
  body: PropTypes.shape({
    user: UserPropType,
    accessToken: PropTypes.string.isRequired,
    refreshToken: PropTypes.string.isRequired,
  }).isRequired,  
})

export const AccessTokenResponsePropType = PropTypes.shape({
  statusCode: PropTypes.number.isRequired,
  body: PropTypes.shape({
    accessToken: PropTypes.string.isRequired,
  }).isRequired,
  error: PropTypes.string,
})

