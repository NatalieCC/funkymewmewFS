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
        let image2 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/dearMaple.jpg";
        //let image3 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/abstract.jpg";
        if(pins[0]) {
            image1 = pins[0].imageUrl;
        }
        if(pins[1]) {
            image2 = pins[1].imageUrl;
        }
        // if(pins[2]) {
        //     image3 = pins[2].imageUrl;
        // }


        return (
            <div className="board-index-item">
                    <div className='b-index-frame'>
                      
                            <Link to={`/boards/${this.props.board.id}`} className="img-link">
                            <img src={image1} />
                            <img src={image2} />
                            {/* <img src={image3} /> */}
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