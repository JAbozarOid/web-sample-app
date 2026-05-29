import type { JSX } from "react";
import { clx } from "src/util/clx";

// hashtable of functions to create different variant of button
// const buttonFactory = {
//   contained: () => (
//     <button className="bg-blue-500 text-white px-4 py-2 rounded">
//       Contained Button
//     </button>
//   ),
//   outlined: () => (
//     <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
//       Outlined Button
//     </button>
//   ),
//   text: () => <button className="text-blue-500 px-4 py-2">Text Button</button>,
//   default: () => (
//     <button className="bg-gray-500 text-white px-4 py-2 rounded">
//       Default Button
//     </button>
//   ),
// };

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // React.ButtonHTMLAttributes is used to get the type of button props like onClick, etc.
// inside of React.ButtonHTMLAttributes<HTMLButtonElement> there is React.PropsWithChildren so we can remove it

const buttonBaseStyles = "rounded-3xl";

const variants = {
  // ! means imortant
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500",
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
  },
};

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

// version 2 - without switch - case
export const ButtonVersion2: React.FC<ButtonProps> = ({
  // default value for variant is contained
  variant = "contained",
  children,
  color = "primary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      className={clx(buttonBaseStyles, variants[variant][color], sizes[size])}
      {...props}
    >
      {children}
    </button>
  );
};

// version 1 - with switch - case
export const ButtonVersion1: React.FC<ButtonProps> = ({
  // default value for variant is contained
  variant = "contained",
  children,
  color = "primary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (() => {
    // using factory pattern to build different variant of button
    // ...props is used to pass the children and other props to the button like onClick, etc.
    switch (variant) {
      case "contained":
        return (
          // we need to pass boolean and receive boolean, use classnames
          <button
            className={clx(
              buttonBaseStyles,
              variants[variant][color],
              sizes[size],
            )}
            {...props}
          >
            {children}
          </button>
        );
      case "outlined":
        return (
          <button
            className={clx(
              buttonBaseStyles,
              variants[variant][color],
              sizes[size],
            )}
            {...props}
          >
            {children}
          </button>
        );
      case "text":
        return (
          <button
            className={clx(
              buttonBaseStyles,
              variants[variant][color],
              sizes[size],
            )}
            {...props}
          >
            {children}
          </button>
        );
      default:
        return <button className="">Default Button</button>;
    }
  })();
};
// component composition
// write a component :
// 1- reusable
// 2- configurable
// 3- accessible
// 4- themable
// 5- responsive
// 6- maintainable
// 7- scalable
