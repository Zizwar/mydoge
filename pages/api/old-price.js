
import Nomics from "nomics";
export default async (_req, res) => {

    const apiKey = "f56ed6223b0a86f2df522c04f64d7454";
    const ids = ["DOGE"];
    const nomics = new Nomics({
        apiKey,
        
    });
    try {
        const currencies = await nomics.currenciesTicker({ids}) || [];
 const price = currencies[0]?.price || 0;
       console.log("====Price", price);
       const  data = {price,status:"ok"}
        res.json( data);
    } catch (error) {
        console.log({ error });
        res.json([]);
    }
}