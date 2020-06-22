import React from 'react';
import { Link } from 'react-router-dom';

class ProfileBoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        let pinCount = this.props.board.pin_ids.length;
        let pins = this.props.pins.filter(pin => {
            this.props.board.pin_ids.includes(pin.id)
        })
        let image1 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/Venice.jpg";
        let image2 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/Venice.jpg";
        if(pins[0]) {
            image1 = pins[0].imageUrl;
        }
        if(pins[1]) {
            image2 = pins[1].imageUrl;
        }


        return (
            <div>
                    <div className='b-index-frame'>
                        <Link to={`/boards/${this.props.board.id}`} >
                        <img src={image1} 
                            style={{width: 100, height: 100, position: 'absolute'}} />
                        <img src={image2} 
                            style={{width: 150, height: 150, position: 'absolute'}} />
                        </Link>

                         <div className='b-footer-auth'>
                            <h3 className='b-index-title'>{this.props.board.title}</h3>
                            <p className='b-index-pincount'>{pinCount} pins</p>
                        </div>  

                        
                    </div>
            </div>  
           
        )
    }
}

export default ProfileBoardIndexItem;