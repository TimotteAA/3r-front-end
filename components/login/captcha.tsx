import { useState, useEffect, useRef, FC } from "react";

export interface ICaptcha {
  onClick?: () => void;
}

const Captcha: FC<ICaptcha> = (props) => {
  const { onClick } = props;
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(60);

  const btnRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    const handleClick = () => {
      onClick && onClick();
      setDisabled(true);
      timerRef.current = setInterval(() => {
        setCounter((counter) => {
          if (counter <= 0) {
            clearInterval(timerRef.current);
            setDisabled(false);
            return 5;
          }
          return counter - 1;
        });
      }, 1000);
    };
    if (btnRef.current) {
      btnRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <button
      className="bg-red-400 text-zinc-200 rounded-lg w-1/5 text-center p-2"
      ref={btnRef}
      disabled={disabled}
    >
      {disabled ? counter + "s" : "发送验证码"}
    </button>
  );
};

export default Captcha;
