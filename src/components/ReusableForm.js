import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  console.log(props.formSubmissionHandler);
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
        
        <label>Items that say "I don't"</label>
        <br/>
        <select defaultValue={"DEFAULT"} name="item1">
          <option value="DEFAULT" disabled> -- item 1 --</option>
          <option value="Bag of Rocks, Unassorted">Bag of Rocks, Unassorted</option>
          <option value="Pocket-sized Three Stooges Totem Pole">Pocket-sized Three Stooges Totem Pole</option>
          <option value="17-Sided Rubix Cube">17-Sided Rubix Cube</option>
        </select>
        <br/>
        <label>Items that say "I'm afraid of commitment"</label>
        <br/>
        <select defaultValue={"DEFAULT"} name="item2">
          <option value="DEFAULT" disabled> -- item 2 --</option>
          <option value="Uno Reverse Card">Uno Reverse Card</option>
          <option value="Pink Furry Handcuffs with EZ-pick Lock">Pink Furry Handcuffs with EZ-pick Lock</option>
          <option value="An IOU (a better Valentine's Day Gift)">An IOU (a better Valentine's Day Gift)</option>
        </select>
        <br/>
        <label>Items that say "Remember the first time we met? Yeah, me neither..."</label>
        <br/>
        <select defaultValue={"DEFAULT"} name="item3">
          <option value="DEFAULT" disabled> -- item 3 --</option>
          <option value="Four Loko">Four Loko</option>
          <option value="Advil (Fun-Size)">Advil (Fun-Size)</option>
          <option value="Receipt for a Las Vegas Wedding Chapel Establishment?!?">Receipt for a Las Vegas Wedding Chapel Establishment?!?</option>
        </select>
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
