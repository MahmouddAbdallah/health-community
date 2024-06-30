import PropTypes from 'prop-types'
import { StarIcon } from 'lucide-react'


const Stars = ({ rate }) => {
    return (
        <div className='flex gap-1'>
            {Array(rate).fill().map(
                (_, index) => <StarIcon
                    className='fill-yellow-300 stroke-yellow-300'
                    key={index} />
            )}
        </div>
    )
}

Stars.propTypes = {
    rate: PropTypes.any
}

export default Stars