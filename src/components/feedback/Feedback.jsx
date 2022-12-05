import { useState } from 'react';

// configs
import { projectFirestore } from '../../configs/firebaseConfig';

// styles
import './Feedback.css';

export const Feedback = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const togglePopUp = () => {
    setShowFeedbackModal(!showFeedbackModal);
  };

  const saveFeedbackEmail = (event) => {
    setFeedbackEmail(event.target.value);
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const saveFeedbackMessage = (event) => {
    setFeedbackMessage(event.target.value);
    if (event.target.value.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const sendFeedback = async (e) => {
    e.preventDefault();

    const feedback = { email: feedbackEmail, message: feedbackMessage };
    console.log(feedback);

    try {
      await projectFirestore
        .collection('feedback')
        .doc(feedbackEmail)
        .set(feedback);
    } catch (err) {
      console.log(err);
    }

    setShowFeedbackModal(!showFeedbackModal);
    setFeedbackEmail('');
    setFeedbackMessage('');
    setIsDisabled(true);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="Feedback">
      <button className="feedback-btn" onClick={togglePopUp}>
        <i className="feedback-logo fa-solid fa-envelope"></i>
      </button>

      {showFeedbackModal && (
        <section className="feedback-modal-container">
          <h3 className="feedback-title">Feedback</h3>
          <form>
            <input
              type="text"
              name="feedback-email-input"
              id="feedback-email-input"
              placeholder="Your email address..."
              onChange={saveFeedbackEmail}
            />
            <textarea
              name="feedback-message-input"
              id="feedback-message-input"
              placeholder="Your feedback message..."
              onChange={saveFeedbackMessage}
            ></textarea>
            <div className="feedback-btns-container">
              <button
                disabled={isDisabled}
                className="btn btn-send"
                onClick={sendFeedback}
              >
                Send
              </button>
              <button className="btn btn-cancel" onClick={togglePopUp}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {showThankYou && <p className="thank-you-message">Thank You</p>}
    </div>
  );
};
