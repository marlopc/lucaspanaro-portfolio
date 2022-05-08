import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { contactContent } from "~/lib/translations";

const useContactAnimation = (isSending, cb) => {
  const { locale } = useRouter();
  const { send, sendLoad, sendFinish } = contactContent[locale];

  const initialAnimations = useMemo(
    () => ({
      loaderSend: false,
      loaderText: send,
      showFinalMessage: false,
    }),
    [locale]
  );

  const [animations, setAnimations] = useState(initialAnimations);

  const animateSending = useCallback(() => {
    setAnimations((prev) => ({
      ...prev,
      loaderText: sendLoad,
      loaderSend: true,
    }));
    const step1 = setTimeout(() => {
      setAnimations((prev) => ({
        ...prev,
        loaderText: sendFinish,
      }));
    }, 1500);
    const step2 = setTimeout(() => {
      setAnimations((prev) => ({
        ...prev,
        showFinalMessage: true,
      }));
    }, 2500);
    const step3 = setTimeout(() => {
      setAnimations({
        loaderText: send,
        loaderSend: false,
        showFinalMessage: false,
      });

      cb();
    }, 8000);
    return [step1, step2, step3];
  }, []);

  useEffect(() => {
    if (!isSending) return;

    const timeouts = animateSending();

    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, [isSending]);

  return animations;
};

export default useContactAnimation;
