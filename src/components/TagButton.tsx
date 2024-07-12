interface ITagButtonProps {
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

export default function TagButton({
  isChecked,
  onClick,
  children,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "text-primary bg-white"
    : "text-white bg-dark-opacity";
  return (
    <button
      className={`rounded-tag-button h-[33px] border border-white px-[10px] text-sm font-medium ${buttonStyle} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
