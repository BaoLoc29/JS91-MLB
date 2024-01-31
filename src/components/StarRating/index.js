import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class HalfRating extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      value: 2.5,
    };
 }

 handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
 };

 render() {
    return (
      <Box>
        <Rating name="half-rating" value={this.state.value} precision={0.5} onChange={this.handleChange} />
      </Box>
    );
 }
}

export default HalfRating;
