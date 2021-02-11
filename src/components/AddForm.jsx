import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import TextArea from './TextArea';
import RatingNew from './RatingNew';
import SelectGenreNew from './SelectGenreNew';

class AddForm extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <SubTitle />
        <ImagePath />
        <TextArea />
        <RatingNew />
        <SelectGenreNew />
      </div>
    );
  }
}

export default AddForm;
