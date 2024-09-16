import { memo, useMemo } from "react";
import { Data } from "../constant/data";

interface propTypes {
  searchString: string;
}

export const ShowMatchedResult = memo(({ searchString }: propTypes) => {
  const getResult = useMemo(() => {
    return Data.filter((value) =>
      value.toLowerCase().includes(searchString.toLowerCase())
    );
  }, [searchString]);

  return (
    <main className="flex flex-col gap-3 p-4 bg-white">
      {getResult.length > 0 &&
        getResult.map((result) => <p key={result}>{result}</p>)}
    </main>
  );
});
