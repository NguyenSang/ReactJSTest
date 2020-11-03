import React from 'react';

import Aux from '../../hoc/Auxiliary';
import './Layout.css';
const layout = (props) => (
    <Aux>
        <div>Tool bar, slider</div>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
)

export default layout;