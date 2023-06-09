import Image from "next/image";

export default function Highlight(props) {
  return (
    <div className="highlight">
      <div className={`highlight--bg--${props.hodl}`}></div>
      <div className="highlight--upper">
        <Image
          src={`/images/${props.coverImg}`}
          alt=""
          className="highlight--image"
          width={52}
          height={52}
        />
        <div className="upper--texts">
          <h4 className="highlight--title">{props.title}</h4>
          <p className={`highlight--status  ${props.hodl}`}>{props.status}</p>
        </div>
      </div>
      <div className="highlight--info">
        <div className="highlight--price">
          <p className="gray">{props.nftname}</p>
          <p className="bold highlight--purchase">{props.bought}</p>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.30469 6.11131L6.0019 0V0.00266638L6.00269 0L9.69981 6.11131L6.00269 8.28842L6.0019 8.28764V8.28842L2.30469 6.11131Z"
              fill="#FAFAFA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.00028 8.98363L2.30469 6.8086L5.99566 11.99L5.99867 11.9988L6.00029 11.9965L6.0019 11.9988V11.9943L9.69806 6.80859L6.00028 8.98363Z"
              fill="#FAFAFA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 8.28568L2.30469 6.10969L6 4.43641V4.43555L6.00095 4.43598L6.0019 4.43555V4.43641L9.69712 6.10969L6.0019 8.28568V8.2868L6.00095 8.28624L6 8.2868V8.28568Z"
              fill="black"
              fill-opacity="0.15"
            />
          </svg>
        </div>

        <div>
          <div className="highlight--price">
            <p className="gray">{props.duration} ago</p>
            <p className="green">+{props.xp}XP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
