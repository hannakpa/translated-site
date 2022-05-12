import bici1 from './slideshow/bici1.jpg';
import bici2 from './slideshow/bici2.jpg';
import bici3 from './slideshow/bici3.jpg';
import { Carousel } from 'react-bootstrap';


function Slideshow() {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bici1}
                    alt="First slide"
                />
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bici2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bici3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default Slideshow