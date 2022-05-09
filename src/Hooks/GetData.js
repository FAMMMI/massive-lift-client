import { useEffect, useState } from "react";

const GetData = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        fetch('https://rocky-tundra-18362.herokuapp.com/product')
            .then(res => res.json())
            .then(newData => setGetData(newData))
    }, []);

    return [getData, setGetData];
}

export default GetData;