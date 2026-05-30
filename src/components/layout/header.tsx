import { ButtonVersion2 } from "src/components/base/button";
import Logo from "../base/logo";
import Container from "../base/container";

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
            <ButtonVersion2 variant="text" color="primary">
              کلیک کن
            </ButtonVersion2>
            <ButtonVersion2 variant="text" color="primary">
              کلیک کن
            </ButtonVersion2>
            <ButtonVersion2 variant="contained" color="primary">
              کلیک کن
            </ButtonVersion2>
          </div>
        </div>
      </Container>
    </header>
  );
};
