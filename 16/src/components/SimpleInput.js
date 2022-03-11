import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBluehandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true
    }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => Not Ideal
    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };


  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBluehandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not to be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {/* {nameInputIsInvaild && <p className='error-text'>Please enter a valid email.</p>} */}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
