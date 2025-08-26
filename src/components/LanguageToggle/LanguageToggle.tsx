import React, { useCallback, useId } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLanguage } from "../../store/slices/language-slice";
import { type LanguageKey } from "../../assets/helpers/types";
import "./language-toggle.scss";

export default function LanguageToggle() {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useAppSelector((state) => state.language);

  const buttonId = useId();
  const lang: LanguageKey = currentLanguage as LanguageKey;

  const setLang = useCallback(
    (next: LanguageKey) => {
      dispatch(setLanguage(next));
    },
    [dispatch]
  );

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "no" : "en");
  }, [lang, setLang]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="language-toggle">
        <p className="language-toggle__language">NO</p>
        <button
            id={buttonId}
            type="button"
            className={["lang-toggle", lang === "en" ? "is-en" : "is-no"]
                .join(" ")
                .trim()}
            role="switch"
            aria-checked={lang === "en"}
            aria-label={`Language: ${lang === "en" ? "English" : "Norwegian"}`}
            onClick={toggle}
            onKeyDown={onKeyDown}
            >
            <span className="lang-toggle__track" aria-hidden="true">
                <span className="lang-toggle__thumb">
                <span className="lang-toggle__label">
                    {lang === "en" ? "EN" : "NO"}
                </span>
                </span>
            </span>
        </button>
        <p className="language-toggle__language">EN</p>
    </div>
    
  );
}