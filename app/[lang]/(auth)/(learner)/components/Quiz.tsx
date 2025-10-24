"use client";
import Image from "next/image";

import useGetQuiz, { IGetQuiz } from "@/app/services/hooks/useGetQuiz";

export default function Quiz() {
  const { questions, refetch, isLoading, isFetching, isError } = useGetQuiz(3);
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError)
    return (
      <>
        <p>Error...</p>
        <button onClick={() => refetch()}>Refetch</button>
      </>
    );
  const render = (q: IGetQuiz) => {
    switch (q.type) {
      case "multiple_choice":
        return (
          <div>
            <p>{q.text}</p>
            {q.image_url && <Image src={q.image_url} alt={q.image_url} />}
            {q.options?.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={`${option.id}`}
                  name="myRadioGroup"
                  // value={option.value}
                  // checked={selectedValue === option.value}
                  // onChange={(e) => setSelectedValue(e.target.value)}
                />
                <label htmlFor={option.text}>{option.text}</label>
                {option.image_url && (
                  <Image src={option.image_url} alt={option.image_url} />
                )}
              </div>
            ))}
          </div>
        );
      case "open_ended":
        return (
          <div>
            <p>{q.text}</p>
            {q.image_url && <Image src={q.image_url} alt={q.image_url} />}
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {questions.map((item: IGetQuiz) => (
          <div key={item.id}>{render(item)}</div>
        ))}
      </div>
    </div>
  );
}
