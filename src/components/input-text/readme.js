import React from 'react';
import InputText from './index.js';

const ReadMe = props => {
    return (
        <div>
            <hr />
            <h5>InputText Example...</h5>

            <h6>default / placeholder</h6>
            <p>
                <InputText placeholder="default input text"/>
            </p>

            <h6>icon</h6>
            <p><InputText placeholder="with icon" icon={"search"}/></p>
            

            <h6>fontSize</h6>
            <p>
                <InputText fontSize="lg" placeholder="fontSize={'lg'}"/>
                <InputText fontSize="sm" placeholder="fontSize={'sm'}"/>
                <InputText fontSize="xs" placeholder="fontSize={'xs'}"/>
            </p>

            <h6>fontSize with icon</h6>
            <p>
                <InputText fontSize="lg" placeholder="fontSize={'lg'} icon={'face'}" icon={'face'}/>
                <InputText fontSize="sm" placeholder="fontSize={'sm'} icon={'face'}" icon={'face'}/>
                <InputText fontSize="xs" placeholder="fontSize={'xs'} icon={'face'}" icon={'face'}/>
            </p>

            <h6>inline</h6>
            <p><InputText placeholder="default input text" inline/></p>
        </div>
    );
}

export default ReadMe;
