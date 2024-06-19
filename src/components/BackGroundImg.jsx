import PropTypes from 'prop-types'


const BackGroundImg = ({ children, bg }) => {
    return (
        <div className='relative overflow-hidden h-screen'>
            <div className='w-full h-screen overflow-hidden'>
                <div className="bg-black" />
                <img className='object-cover h-full w-full' src={bg} alt="" />
            </div>
            <div className="bg-black-black/40 w-full h-full absolute top-0 left-0 pcontainer">
                {children}
            </div>
        </div>
    )
}

BackGroundImg.propTypes = {
    children: PropTypes.array,
    bg: PropTypes.any
}

export default BackGroundImg