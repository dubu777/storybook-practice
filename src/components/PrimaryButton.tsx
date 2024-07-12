type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const dark = "text-white bg-primary";
const light = "text-primary bg-white";
const social = "text-white bg-social";
const text = "text-white bg-transparent";
// tailwind 변형 속성 hover:, focus:, active:, disabled:등이 있다.
// 해당 속성을 가질 때 해당 스타일이 적용된다.
const disabledStyle = "disabled:text-mono200 disabled:bg-mono100";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  children,
  onClick,
  disabled,
}: IPrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-button-default h-[59px] w-full ${disabledStyle} ${color[theme]} `}
    >
      {children}
    </button>
  );
}
