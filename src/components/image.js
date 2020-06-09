import React { Compontent } from 'react';

class DogImage extends Component {
    
    getNewDog = () => {
        fetch('url....')
        .then(res => res.json())
        .then(data => {
            this.setState({ imageUrl: data.message});
        })
    };
    
    componentDidMount() {
        this.getNewDog();
        console.log('Mounted...doggystyle');
    };

    handleClick = () => {
        this.getNewDog();
    };

    render() {
        console.log('rendering dog');
        return (
            <div onClick={this.handleClick}>
                <img src={this.state.imgUrl} alt=""></img>
            </div>
        );
    };
};

export default DogImage;