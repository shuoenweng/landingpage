"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  STORAGE_KEY,
  detectBrowserLocale,
  interpolate,
  isLocale,
  messages,
  type Locale,
  type Messages,
} from "./messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Messages;
  interpolate: typeof interpolate;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const listeners = new Set<() => void>();
let memoryLocale: Locale | null = null;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readStoredLocale(): Locale {
  if (memoryLocale) {
    return memoryLocale;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      memoryLocale = stored;
      return stored;
    }
  } catch {
    // Private mode or blocked storage — fall through to browser language.
  }

  const detected = detectBrowserLocale();
  memoryLocale = detected;
  return detected;
}

function persistLocale(locale: Locale) {
  memoryLocale = locale;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore write failures; subscribers still receive the in-memory update.
  }
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(
    subscribe,
    readStoredLocale,
    (): Locale => "en",
  );

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    persistLocale(next);
    emit();
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: messages[locale],
      interpolate,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
