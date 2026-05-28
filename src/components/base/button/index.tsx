import type { JSX } from "react";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>; // React.ButtonHTMLAttributes is used to get the type of button props like onClick, etc.

export const Button: React.FC<ButtonProps> = ({
  // default value for variant is contained
  variant = "contained",
  ...props
}): JSX.Element => {
  return (() => {
    // using factory pattern to build different variant of button
    // ...props is used to pass the children and other props to the button like onClick, etc.
    switch (variant) {
      case "contained":
        return (
          <button className="p-2 bg-blue-100 rounded-3xl" {...props}>
            {props.children}
          </button>
        );
      case "outlined":
        return (
          <button className="" {...props}>
            {props.children}
          </button>
        );
      case "text":
        return (
          <button className="" {...props}>
            {props.children}
          </button>
        );
      default:
        return <button className="">Default Button</button>;
    }
  })();
};

// hashtable of functions to create different variant of button
const buttonFactory = {
  contained: () => (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Contained Button
    </button>
  ),
  outlined: () => (
    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
      Outlined Button
    </button>
  ),
  text: () => <button className="text-blue-500 px-4 py-2">Text Button</button>,
  default: () => (
    <button className="bg-gray-500 text-white px-4 py-2 rounded">
      Default Button
    </button>
  ),
};
