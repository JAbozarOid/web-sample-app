import { ButtonVersion2 } from "src/components/base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <ButtonVersion2
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        contained
      </ButtonVersion2>
      <ButtonVersion2
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        contained
      </ButtonVersion2>
      <ButtonVersion2
        variant="text"
        color="primary"
        size="small"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        contained
      </ButtonVersion2>
    </header>
  );
};
