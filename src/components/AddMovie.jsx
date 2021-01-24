import React from 'react';

class AddMovie extends React.components {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="textarea" />
        <input type="number" />
        <select>Gender</select>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default AddMovie;