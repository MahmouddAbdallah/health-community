import PropTypes from 'prop-types'

const ImgOrAva = ({ className, img, name, color }) => {

    return (
        <div className={`overflow-hidden rounded-full ${className}`}>
            {
                img ?
                    <img className="w-full h-full object-cover" src={img} alt="ava" />
                    :
                    <div className={`w-full h-full ${color ? color : "bg-blue-500"} border flex items-center justify-center text-white-White font-semibold rounded-full`}>
                        {name?.charAt(0)}
                    </div>
            }
        </div>
    )
}

ImgOrAva.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string
}

export default ImgOrAva
