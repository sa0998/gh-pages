import React from 'react';

const Card = (props) => {
    return(
        <React.Fragment>
            <div className="cards">
                <div className="cardData">
                    <img className="card_img" src={props.imgsrc}/>
                    <div className="card_info">
                        <div className="card_sname">
                        {props.sname}
                        </div>
                        <div className="card_stitle">
                        {props.stitle}
                        </div>
                        <a href={props.slink} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;