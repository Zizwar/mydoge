import axios from 'axios';

export default async (_req, res) => {
    const url = "https://api.coinstats.app/public/v1/markets?coinId=dogecoin";
    

    try {
        const { data = [] } = await axios.get(url);
        console.log("Axios url", url);
        console.log("Axios data", data);
        res.json(data || []);
    } catch (error) {
        console.log({ error });
        res.json([]);
    }
}