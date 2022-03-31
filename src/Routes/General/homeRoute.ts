import { Route } from "../../structures/Route"
import glob from "glob";
import { promisify } from "util";
const globPromise = promisify(glob);

export default new Route({
  name: "/",
  run: async (req, res) => {
      res.send({ msg: `Welcome` })
  },
});
