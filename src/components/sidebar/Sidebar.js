import "./Sidebar.css";
import img from "../../icons/1.png";

function Sidebar({ tags }) {
  return (
    <>
      <div className="panel h-full sidebar m-4">
        <div className="text-center info p-4">
          <img src={img} alt="img" style={{ height: "200px" }} />
          <br />
          <h2 className="p-3">
            <strong>Shark Ninja</strong>
          </h2>
          <h3 className="greyText">Magic Bullet NutiBullet 12-Piece</h3>
          <h3 className="greyText">High-Speed Blender/Mixer system</h3>
        </div>
        <hr />
        <div className="tags m-2">
          {tags.map((tag, i) => (
            <div className="tag m-2 d-inline-block" key={i}>
              {tag}
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}

export default Sidebar;
