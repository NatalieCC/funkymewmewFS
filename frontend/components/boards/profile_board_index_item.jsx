import React from 'react';
import { Link } from 'react-router-dom';

class ProfileBoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pinCount = this.props.board.pin_ids.length;
        let pins = this.props.pins.filter(pin => {
            this.props.board.pin_ids.includes(pin.id)
        })
        
        let image0 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/grid0.png";
        let image1 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/grid0.png";
        let image2 = "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/grid0.png";
        let cover_urls = this.props.board.cover_urls;
        if (cover_urls[0]) {
            image0 = cover_urls[0];
        }
        if (cover_urls[1]) {
            image1 = cover_urls[1];
        }
        if (cover_urls[2]) {
            image2 = cover_urls[2];
        }


        return (
            <div className="board-index-item">
                    <div className='b-index-frame'>
                        <Link to={`/boards/${this.props.board.id}`} className="img-link">
                            <img src={image0} />
                            <div className="image-div-inner">
                                <img src={image1} />
                                <img src={image2} />
                            </div>
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