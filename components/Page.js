import Highlights from "@/components/Highlights";
import Cards from "/components/Cards";
import Profiles from "/components/Profiles";

export default function Page() {
  return (
    <div className="page">
      <div className="lhs">
        <Profiles />
      </div>

      <div className="rhs">
        <div>
          <Highlights />
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
