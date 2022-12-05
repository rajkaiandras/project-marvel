import { useState } from 'react';

// configs
import { projectFirestore } from '../../configs/firebaseConfig';

// styles
import './Subscription.css';

export const Subscription = ({ closeSubscription }) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const fullNameInputHandler = (event) => {
    setFullName(event.target.value);
  };

  const emailAddressInputHandler = (event) => {
    setEmailAddress(event.target.value);
    event.target.value.includes('@') && event.target.value.includes('.')
      ? setIsDisabled(false)
      : setIsDisabled(true);
  };

  const toSubscribe = async (event) => {
    event.preventDefault();

    const subscriber = {
      fullName: fullName,
      email: emailAddress,
    };
    console.log(subscriber);

    try {
      await projectFirestore
        .collection('subscription')
        .doc(fullName)
        .set(subscriber);
    } catch (err) {
      console.log(err);
    }

    closeSubscription();
  };

  return (
    <div className="subscription-backdrop">
      <div className="subscription-content">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="close" onClick={closeSubscription}>
            <i className="fa-regular fa-circle-xmark"></i>
          </div>
          <h3>
            Subscribe to our newsletters to get the news about Marvel heroes
          </h3>
          <form>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your full name"
              onChange={fullNameInputHandler}
            />
            <input
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="Your e-mail address"
              onChange={emailAddressInputHandler}
            />
            <button disabled={isDisabled} onClick={toSubscribe}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
