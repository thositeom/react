import { useEffect, useState } from "react";

export default function useFeach(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data.content);
            })
            .catch(error => {
                console.log(url + " 데이터 수신 오류 입니다.");
            })

    }, [url]);

    return data;
}