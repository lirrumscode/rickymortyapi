import { useEffect, useState } from "react";
import axios from "axios";
import Character from "../interfaces/character.ts";

const useGetAllCharacter = (uri: string) => {
  const [data, setData] = useState<Array<Character>>();
  useEffect(() => {
    (async () => {
      await axios.get(`${uri}`).then((request) => {
        setData(request.data.results);
      });
    })();
  }, []);
  return data;
};

export { useGetAllCharacter };
