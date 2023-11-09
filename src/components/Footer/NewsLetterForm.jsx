import { useState } from 'react';
import { sanitize } from '../../utils/sanitize'
import Loading from '../loading';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>

      <div className="col-span-12 lg:col-span-6">

          <h2 className='text-white font-roboto font-bold text-2xl text-center md:text-4xl md:text-center md:leading-normal lg:text-left '>
    Get our stories delivered from us to your inbox weekly!!!
</h2>
<div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
    <input onChange={(event) => setEmail(event?.target?.value ?? '')} type="email" placeholder='your email' className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light placeholder:text-center' onKeyUp={(event) => handleInputKeyEvent(event)}/>
    <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap  ' onClick={handleFormSubmit}>Get started</button>
</div>
      </div>
      <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
        /*div*/  <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
      /*div*/    />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
     /*div*/     <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm
