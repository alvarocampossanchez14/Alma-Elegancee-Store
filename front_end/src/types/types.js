
import PropTypes from 'prop-types';

export const AuthResponseErrorPropType = PropTypes.shape({
  body: PropTypes.shape({
    error: PropTypes.string.isRequired,
  }).isRequired,
});

export const UserPropType = PropTypes.shape({
  __id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
});

// export const AuthResponsePropType = PropTypes.shape( {
//   user: user,
//   accesToken: PropTypes.string,
//   refreshToken: PropTypes.string  
// })


