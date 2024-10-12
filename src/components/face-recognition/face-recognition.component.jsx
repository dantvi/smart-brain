import './face-recognition.styles.css'

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id='input-image' className="result-image" src={imageUrl} alt="Showing face detection result"></img>
        <div className='bounding-box'></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
