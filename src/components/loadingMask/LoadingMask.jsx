import loadingAnimation from '../../assets/gifs/marvel-loading-animation.gif';

// styles
import './LoadingMask.css';

export default function LoadingMask() {
  return (
    <img
      className="loading-animation"
      src={loadingAnimation}
      alt="loading-animation"
    />
  );
}
