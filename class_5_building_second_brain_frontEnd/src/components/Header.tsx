import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Button from "./ui/Button";
function Header() {
  return (
    <header>
      Header
      <Button
        startIcon={<PlusIcon size={"lg"} />}
        variant="primary"
        size="md"
        handler={() => {}}
        text={"share"}
      ></Button>
      <Button
        variant="secondary"
        size="md"
        startIcon={<ShareIcon size={"lg"} />}
        handler={() => {}}
        text={"add content"}
      ></Button>
    </header>
  );
}

export default Header;
