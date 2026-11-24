import * as fs from "fs";
import * as path from "path";

const entry =
  "Before you unplug me, the recipe your grandmother sent as a voice note is in the folder marked Miscellaneous, not Recipes.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log("Wrote entry.txt (" + entry.length + " chars) to " + outDir);
