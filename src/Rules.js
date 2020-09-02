import React from 'react';
import './Rules.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const img_source = "https://book.ntuee.org/rule/page_"

const Rules = (props) =>{
    return(
        <div id="Rules_container">
           <Carousel className="container col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 pt-5 height-100">
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"1.jpg"} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"2.jpg"} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"3.jpg"} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"4.jpg"} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"5.jpg"} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className="img-fluid Rules_img" src={img_source+"6.jpg"} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default Rules
