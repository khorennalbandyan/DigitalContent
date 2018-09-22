import React, { Component } from 'react';
import TwoEight from './img/main_centerIcon.png';

class MainLongItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xl-12">
                <div className="row g pr-3 pl-3">
                    <div className="col-xl-6 col-lg-6 pt-3 pb-5 d-flex justify-content-center for_bg">
                        <img src={TwoEight} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6 pt-3 pb-5 for_bg">
                        <h1>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. </h1>
                        <p className="pt-5">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras <br />
                            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium <br />
                            porta. Nam condimentum vitae ligula vel ornare. Phasellus at <br />
                            semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, <br />
                            vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend <br />
                            a dolor et, venenatis facilisis dolor. </p>
                        <p className="icons">
                            <i className="fas fa-eye">{this.props.seen}</i>
                            <i className="fas fa-comment-alt">{this.props.comment}</i>
                            <i className="fas fa-thumbs-up">{this.props.likes}</i>
                            <i className="fas fa-thumbs-down">{this.props.disslikes}</i>
                        </p>
                        <p className="info">
                            <span ><i className="fa fa-tag" aria-hidden="true">
                            </i><span className=" pl-2">digital, дизайн, разработка</span></span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLongItem;