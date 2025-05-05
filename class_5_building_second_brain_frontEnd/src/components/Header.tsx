import { PlusIcon } from "../icons/PlusIcon";
import Button from "./ui/Button";
function Header() {
  return (
    <header>
      Header
      <Button
        startIcon={<PlusIcon />}
        variant="primary"
        size="md"
        handler={() => {}}
        text={"share"}
      ></Button>
      <Button
        variant="secondary"
        size="md"
        handler={() => {}}
        text={"add content"}
      ></Button>
    </header>
  );
}

export default Header;
