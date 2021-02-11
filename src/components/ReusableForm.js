import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name of "lucky" recipient:</label>
        <br/>
        <input type="text" name="recipient" placeholder="Recipient"/>
        <br/>
        <label>Name of disreputable sender:</label>
        <br/>
        <input type="text" name="sender" placeholder="Sender"/>
        <br/>
        <label>Insincere Message:</label>
        <br/>
        <textarea name="message" placeholder="Add a special message!" cols="30" rows="10"></textarea>
        <br/>
        <button type="submit">{props.buttonText}</button>
        <br/>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;
