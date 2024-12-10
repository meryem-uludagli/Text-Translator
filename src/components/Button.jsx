import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";
import { PiTranslateLight } from "react-icons/pi";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(translateText())}
      className="bg-zinc-700 text-center px-5 py-3 rounded-md font-semibold  mt-3 disabled:brightness-50 flex items-center justify-center"
    >
      <span className="mr-2">Translate</span>
      <PiTranslateLight className="text-xl" />
    </div>
  );
};

export default Button;
