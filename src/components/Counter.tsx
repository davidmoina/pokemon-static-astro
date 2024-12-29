import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initialValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue);
  return (
    <>
      {props.children}
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        class="bg-blue-500 p-2 mr-2 rounded-md"
        onClick={() => setCounter((prev) => ++prev)}
      >
        +1
      </button>

      <button
        class="bg-blue-500 p-2 mr-2 rounded-md"
        onClick={() => setCounter((prev) => --prev)}
      >
        -1
      </button>
    </>
  );
};
