import React from 'react'
import circle from '../../image/CombinedShape.png';
import Text from '../TextComponent/Text';
import './card.css';

const Card = () => {
    return (
        <div className='Card'>
            <div className='Card-container-circlre bg-image'>
                {/* <img src={circle} className="circle" alt='' /> */}
                <div className='circle-inear' >
                    <Text text={"57"} style={"bigNumber"} />
                    <Text text={"Total-stocks"} style={"circletext"} />
                </div>
            </div>
        </div>
    )
}

export default Card