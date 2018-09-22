import React, { Component } from 'react';
import MainItem from './MainItem';
import MainLongItem from './MainLongItem';
import './App.css';
import LeftIcon from './img/main_top__ledtIcon.png';
import RightIcon from './img/main_top__rightIcon.png';
import LeftIconMouse from './img/main_center__leftIcon.png';
import Eight from './img/main__center_leftIcon.png';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.show = this.show.bind(this);
  }
  show(e) {
    e.preventDefault();
    this.setState({ show: !this.state.show })
  }
  render() {
    const text1 = <p> Curabitur lobortis id lorem id bibendum. Ut <br /> id consectetur magna. Quisque volutpat</p>;
    return (
      
        <main className="container ">
          <div className="row d-flex ">
            <MainItem img={LeftIcon} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
            <MainItem img={RightIcon} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
          </div>
          <div className="row d-flex ">
            <MainItem img={LeftIconMouse} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
            <MainItem img={Eight} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
          </div>
          <div className="row">
            <MainLongItem seen="120" comment="22" likes="170" disslikes="30" />
          </div>
          <div className="row">
            <MainItem img={LeftIcon} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
            <MainItem img={LeftIcon} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
          </div>
          <div className="row ">
            <MainItem img={LeftIconMouse} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
            <MainItem img={LeftIconMouse} text={text1} seen="120" comment="22" likes="170" disslikes="30" />
          </div>
          <div className="row">
            <footer className="col-12 text-center">
              <a href="" className="show " onClick={this.show}>{this.state.show ? 'свернуть' : 'показать больше'}</a>
              {this.state.show && <MainLongItem seen="120" comment="22" likes="170" disslikes="30" />}
            </footer>
          </div>
        </main>

    );
  }
}

export default App;
