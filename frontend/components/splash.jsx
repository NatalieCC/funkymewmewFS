import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/paris.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/buddha.jpg",
                
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/dearMaple.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/Venice.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/abstract.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/de+dinning.jpg",
                
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/backyard.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/poppy.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/butterfly.jpg",
                
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/window.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/huaban.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/one.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/light.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/fruit.jpg",
                "https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/forest.jpg",
            ]
        };
    }

    render() {
        const images = this.state.images.map((url, i) => {
            return (
                <div className="splash-pic-box" key={i} >
                    <img className="splash-pic" src={url} />
                </div>
            )
        });
        return (
            <div className="main-splash">
                <div className="splash-container">
                    {images}
                </div>
            </div>
        )
    }
}

export default Splash;