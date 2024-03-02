"use client";

import { useRouter } from "next/navigation";

interface IProps {
  name: string;
  age: number;
}

export default function CustomButton(props: IProps) {
  const { name, age } = props;
  const router = useRouter()

  return (
    <>
      <button
        onClick={() => {
          router.push('/profile/asd')
        }}
      >
        {name}
      </button>
      <p>{age}</p>
    </>
  );
}
