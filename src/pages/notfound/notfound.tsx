import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { routePaths } from "../../Routes";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routePaths.HOME);
  };

  return (
    <div className="text-center mt-6">
      <div className="text-2xl">Page Not Found</div>
      <Button className="mt-4" onClick={goHome}>
        Go To Home
      </Button>
    </div>
  );
}
