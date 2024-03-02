import Test from "@/components/Button";

export default function Home() {
  const props = {
    name: "This is a cleaner way",
    age: 22,
  };
  return (
    <>
      <h2>Hello World test</h2>
      <Test {...props} />
    </>
  );
}
