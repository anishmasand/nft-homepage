import Profile from "/components/Profile";

import Community from "/components/Community.js";
import profile from "/data/profile.js";

const ci = profile[0].communityimages;
const allimages = ci.map((item) => {
  return <Community className="sec4--img" key={profile[0].id} {...item} />;
});

export default function Profiles() {
  const profiles = profile.map((item) => {
    return <Profile key={item.id} {...item} commoncommunities={allimages} />;
  });

  return (
    <div className="Profiles">
      <section className="cards-list">{profiles}</section>
    </div>
  );
}
