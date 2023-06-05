import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import { useState } from 'react';

const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

    //Contains infomation required during button creration 
    const buttonData = {

        // Functions called on click evnets
        clickEventFuncs: {

        },

        // Construct object containg button infomation - Button Text - Click event function
        btnObjectConst: function(textCont, btnFunc) {
            return {
                textCont,
                btnFunc: this.clickEventFuncs.btnFunc,
            }
        },

        // Contains button infomation objects 
        btnInfoObjects: {

        },
    };

    // Return map containg button components
    const createButtons = () => {
        
        // Construct button compoent
        const buttonConstructor = () => {

        };

    };

    const buttons = Object.entries(btnInfo).map((btnInfoObj) => createButton(btnInfoObj))

    return(
        <div id='button-wrapper' className='flex-col'>
            {buttons}
        </div>
    )
};

export default ButtonPanel