import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { StarWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
        {technologies.map((technology) => (
            <div className="w-40 h-40" key={technology.name}>
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
    </div>
  )
}

export default StarWrapper(Tech, "");