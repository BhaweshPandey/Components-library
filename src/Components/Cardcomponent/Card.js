import React from 'react'
import circle from '../../image/CombinedShape.png';
import Text from '../TextComponent/Text';
import './card.css';

const Card = () => {
    return (
        <>
            <div className='Card'>
                <div className='Card-container-circle'>
                    <Text text={"57"} style={"bigNumber"} />
                    <Text text={"Total-stocks"} style={"circletext"} />
                </div>
                <div className='Card-mid-1'>
                    <Text text={"Currently available"} style={"text"} />
                    <Text text={"33"} style={"number"} />
                </div>
                <div className='Card-mid-2'>
                    <Text text={"stocks have been sold"} style={"text"} />
                    <Text text={"24"} style={"number"} />
                </div>
                <div className='Card-bottom'>
                    <Text text={"Update stocks"} style={"c-bottom"} />
                </div>
            </div>
        </>
    )
}

export default Card