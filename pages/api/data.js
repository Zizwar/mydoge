
//import data from "../../wino/wino.json";
import axios from 'axios';
const url = "https://api.coinstats.app/public/v1/markets?coinId=dogecoin";


const data = []
const oldTime = 0;
let obj = { time: oldTime, data }
export default async (_req, res) => {
    const newTime = new Date().getTime();
    const oldTime = obj.time;
    const btwTime =  newTime - oldTime;
    if (btwTime > 15000) {

        try {
            const { data = [] } = await axios.get(url);
          console.log("load in WEB url");
  
            res.json(data || []);
            obj.data = data;
            obj.time = new Date().getTime();
        } catch (error) {
            console.log({ error });
            res.json([]);
        }
    } else {
      console.log("load in Local");
        res.json(obj.data)
    }
}
