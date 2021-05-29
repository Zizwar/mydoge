
import Nomics from "nomics";
//
const apiKey = "f56ed6223b0a86f2df522c04f64d7454";
const ids = ["DOGE"];
const nomics = new Nomics({
    apiKey,

});
let counter = 1;
setInterval(_=>counter++,1000) 
//
let oldTime = 0;
let _price = 0;
export default async (_req, res) {
    const newTime = new Date().getTime();
    const btwTime = newTime - oldTime;
    if (btwTime > 7000)
        try {
            const currencies = await nomics.currenciesTicker({ ids }) || [];
            const price = currencies[0]?.price;
            console.log("WEB Price", price);

            const data = { price, counter:{h:counter/60/60,m:counter/60,s:counter},status: "ok" }
            res.json(data);
            _price = price;
            oldTime = new Date().getTime();
        } catch (error) {
            console.log({ error });
            res.json([]);
        } else {
        console.log("Local Price", _price);
        res.json({price:_price})
    }
}
