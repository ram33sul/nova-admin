import { ButtonStyleType } from "../button/button.d";
import Button from "../button/button.component";
import Logo from "../logo/logo.component";

export default function Header() {
  return (
    <header className="p-4 flex justify-between border-b-[1px] border-gray-500/25">
      <Logo />
    </header>
  );
}
