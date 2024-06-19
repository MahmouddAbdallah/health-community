import PropTypes from 'prop-types'

const ErrorMsg = ({ message }) => {
    return (
        <div>
            <span className='text-red-500 text-sm font-medium'>
                {message ? message : ""}
            </span>
        </div>
    )
}

ErrorMsg.propTypes = {
    message: PropTypes.string
}

export default ErrorMsg