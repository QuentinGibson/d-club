import clsx from "clsx";
import { useState } from "react";
type MenuIconProps = {
  onClick: () => void;
}

const MenuIcon = ({ onClick }: MenuIconProps) => {
  const iconBar = `block w-[21px] h-[3px] rounded-lg bg-white`;
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    onClick()
  };

  return (
    <button
      className={clsx(
        [
          "group p-2 w-[40px] transition-all duration-200 relative",
          { active: isActive },
          "z-50"
        ])}
      onClick={handleClick}
    >
      <span className={clsx([iconBar, { hidden: isActive, "transition-opacity": true }])} />
      <span
        className={clsx([
          iconBar,
          "my-2",
          "w-[25px]",
          "h-1",
          "transition-transform duration-200",
          { "ml-[2px] group-hover:ml-[4px]": !isActive },
          { "rotate-45": isActive },
          { "translate-y-0.5": isActive },
          { "translate-x-0.5": isActive },
          { "mt-0 ml-0 mb-0": isActive },
        ])}
      />
      <span
        className={clsx([
          iconBar,
          " w-[25px]",
          "transition-transform duration-200",
          { "ml-[14px]  group-hover:ml-[8px]": !isActive },
          { "-rotate-45": isActive },
          { "-translate-y-0.5 translate-x-0.5": isActive },
          { "ml-0": isActive },
        ])}
      />
    </button>
  );
};

export default MenuIcon;
