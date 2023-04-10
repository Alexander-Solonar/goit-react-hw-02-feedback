import React, { Component } from 'react';
import './test.css';

// class MyFirstClass extends Component {
//   static defaultProps = {
//     step: 1,
//     value: 0,
//   };

//   state = {
//     value: this.props.value,
//   };

//   handleIncrement = () => {
//     const { step } = this.props;

//     this.setState(prevState => ({
//       value: prevState.value + step,
//     }));
//   };

//   handleDecrement = () => {
//     const { step } = this.props;

//     this.setState(prevState => ({
//       value: prevState.value - step,
//     }));
//   };

//   render() {
//     const { step } = this.props;
//     const { value } = this.state;

//     return (
//       <div>
//         <span>{value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// export default MyFirstClass;

class Menu extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {this.state.visible && <div className="menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Menu;
