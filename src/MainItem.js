import React, { Component } from 'react';
import './MainItem';
class MainItem extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-5 pb-5">
                <div className="col-xl-12 col-lg-12 pt-5 pb-5 main_item ">
                    <img className="float-left mr-3" src={this.props.img} alt="" />
                    {this.props.text}
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
        );
    }
}

export default MainItem;