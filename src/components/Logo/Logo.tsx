import React from "react";
import LogoIcon2 from "../../assets/images/svg/logo.svg?react";
import "./logo.scss";

export default function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const scope = (e.currentTarget as HTMLButtonElement).closest(".layout") ?? document;
    const contentEl = scope.querySelector<HTMLElement>(".content");
    contentEl?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="logo"
      onClick={handleClick}
      aria-label="Scroll to top of content"
    >
      <span className="logo__icon-wrapper" aria-hidden="true">
        <LogoIcon2 focusable="false" aria-hidden="true" />
      </span>
    </button>
  );
}