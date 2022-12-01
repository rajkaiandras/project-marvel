import loadingAnimation from '../../assets/gifs/marvel-loading-animation.gif';

// styles
import './LoadingMask.css';

export const LoadingMask = () => {
  return (
    <div className="LoadingMask">
      <img
        className="loading-animation"
        src={loadingAnimation}
        alt="loading-animation"
      />
      <p className="loading-title">loading</p>
      <p className="loading-subtitle">please wait</p>
    </div>
  );
};
