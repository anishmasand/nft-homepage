import Image from "next/image";
import profile from "/data/profile.js";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile--top">
        <div className="profile--img">
          <Image
            src={`/images/${profile.coverImg}`}
            alt=""
            className="card--image"
            width={500}
            height={500}
          />
        </div>
        <div className="profile--details"></div>
      </div>
    </div>
  );
}
