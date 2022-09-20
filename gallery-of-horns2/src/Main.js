import React from 'react';
import HornedBeast from './HornedBeast.js';
import Dragon from './dragon.jpg';
import Triceratops from './Triceratops.jpg';

class Main extends React.Component {
    render() {
        return (
        <>
            <h2> Dangerous Beasts with Horns </h2>
            <div>
                <HornedBeast src={Dragon} alt={'Dragon'} title={'Dragon'}/>
            </div>
            <div>
                <HornedBeast src={Triceratops} alt={'Triceratops'} title={'Triceritops'} />
            </div>
        </>
        )
    }
}

export default Main;