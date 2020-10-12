import React from 'react';
import "./css/Alignment.css";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

const Alignment = () => {
    return ( 
        <div className="alignment">
            
            Alignment 
                       
            <div className="al__option">
                <MoveToInboxIcon color="primary" fontSize="medium" />
            </div>
            <div className="al__option">
                <MoveToInboxIcon color="primary" fontSize="medium" />
            </div>
            <div className="al__option">
                <MoveToInboxIcon color="primary" fontSize="medium" />
            </div>
            <div className="al__option">
                <MoveToInboxIcon color="primary" fontSize="medium" />
            </div>
        </div>
     );
}
 
export default Alignment;