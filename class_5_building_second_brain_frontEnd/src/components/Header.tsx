import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Button from "./ui/Button";
function Header() {
  return (
    <header className="h-20 bg-slate-300 flex items-center justify-end">
      <Button
        startIcon={<ShareIcon size={"lg"} />}
        variant="secondary"
        size="md"
        handler={() => {}}
        text={"share brain"}
      ></Button>
      <Button
        variant="primary"
        size="md"
        startIcon={<PlusIcon size={"lg"} />}
        handler={() => {}}
        text={"add content"}
      ></Button>
    </header>
  );
}

export default Header;
