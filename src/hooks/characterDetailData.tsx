import { useEffect, useState } from "react";
import Character from "../interfaces/character.ts";
import axios from "axios";

const url: string = "https://rickandmortyapi.com/api/character";

const UseGetDetailData = (id: any) => {
  const [detail, setDetail] = useState<Array<Character>>();
  useEffect(() => {
    (async () => {
      await axios.get(`${url}/${id}`).then((request) => {
        setDetail(request.data)
      });
    })();
  }, []);
  return detail;
};

export { UseGetDetailData };
