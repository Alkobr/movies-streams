import "./RightSide.css";

function RightSide({ channel }) {
  return (
    <div className="rightSideServiceDesign">
      <img src={channel.image} alt="" className="imgStyleRightSide" />
      <h4>{channel.name}</h4>
    </div>
  );
}

export default RightSide;
