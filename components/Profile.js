import Image from "next/image";
import Community from "/components/Community.js";
import Category from "/components/Category.js";

export default function Profile(props) {
  // let allimages;
  // for (let i = 0; i < props.communityimages.length; i++) {
  //   allimages += (
  //     <Community
  //       className="sec4--img"
  //       key={props.id}
  //       communityimage={props.communityimages[i]}
  //     />
  //   );
  // }

  // const allimages = props.communityimages.map((item) => {
  //   return <Community className="sec4--img" key={props.id} {...item} />;
  // });

  return (
    <div className="profile">
      <div className="profile--sec1">
        <div className="sec1--top">
          <Image
            className="top--img"
            src={`/images/${props.coverImg}`}
            alt=""
            width={84}
            height={116}
          />
          <div className="img--level">
            <p className="level">LVL{props.level}</p>
          </div>
        </div>
        <div className="top--details">
          <h3 className="details--username">{props.username}</h3>
          <p className="details--tid">{props.tid}</p>
        </div>
      </div>

      <div className="profile--sec2">
        <div className="twitter">
          <Image src="/images/twitter-icon.svg" alt="" width={24} height={24} />
          <p className="twitter-username">@{props.twitterusername}</p>
        </div>

        <div className="web">
          <Image src="/images/web-icon.svg" alt="" width={24} height={24} />
        </div>
      </div>

      <div className="profile--sec3">{props.about}</div>

      <div className="profile--sec4">
        <div className="sec4--heading">
          <p className="gray">Common communities ({props.commoncommunity})</p>
        </div>
        <div className="sec4--allimgs">{props.commoncommunities}</div>
      </div>

      <div className="sec5-s">
        <div className="sec5">
          <Category categoryName="Art" stat={props.perc.art} yellow="yes" />
          <Category
            categoryName="Utility"
            stat={props.perc.utility}
            yellow="yes"
          />
          <Category categoryName="PFP" stat={props.perc.pfp} />
        </div>
        <div className="sec5-1">
          <Category categoryName="Metaverse" stat={props.perc.metaverse} />
          <Category categoryName="Gaming" stat={props.perc.gaming} />
        </div>
        <div className="sec5-2">
          <Category categoryName="PFP" stat={props.perc.pfp} />
          <Category categoryName="ens" stat={props.perc.ens} />
        </div>
      </div>

      <div className="sec6">
        <p className="sub">Subscribe </p>
        <Image
          className="top--img"
          src="/images/arrow.svg"
          alt=""
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
