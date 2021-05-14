
import data from "../../wino/wino.json";
export default async (_req, res) =>
        res.json( data || {});
 