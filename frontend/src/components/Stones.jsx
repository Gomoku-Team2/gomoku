import pinkStone from '../assets/image/Pink.png'
import purpleStone from '../assets/image/Purple.png'


function Stones() {
  return (
    <div>
    <img src={pinkStone} alt="pinkStone" style={stoneStyle} ></img>
    <img src={purpleStone} alt="pinkStone" style={stoneStyle} ></img>
    </div>
  );
}

export default Stones
const stoneStyle = {
    width: '30px',
    height: '30px',
  };
