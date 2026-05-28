import type { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

// we can set type for our Layout, we are using typescript
// FC means function component
// FC has generic types --> children is type of PropsWithChildren
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};
