import Image from "next/image";

export default function Community(props) {
  //   let i = 0;
  return (
    <div className="community">
      <Image
        src={`/images/${props.communityimage}`}
        alt=""
        width={48}
        height={48}
      />
    </div>
  );
}
