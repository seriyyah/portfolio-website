'use client';

import { useEffect, useState, useCallback } from 'react';

type TypewriterState = 'typing' | 'deleting' | 'waiting';

interface UseTypewriterOptions {
  readonly words: readonly string[];
  readonly loop?: boolean;
  readonly typeSpeed?: number;
  readonly deleteSpeed?: number;
  readonly delaySpeed?: number;
}

interface TypewriterContext {
  readonly currentWord: string;
  readonly displayText: string;
  readonly state: TypewriterState;
  readonly wordIndex: number;
}

const DEFAULT_OPTIONS = {
  loop: true,
  typeSpeed: 50,
  deleteSpeed: 30,
  delaySpeed: 2000,
} as const;

const createTypewriterContext = (
  words: readonly string[],
  displayText: string,
  wordIndex: number,
  isDeleting: boolean
): TypewriterContext => ({
  currentWord: words[wordIndex] ?? '',
  displayText,
  wordIndex,
  state: determineState(displayText, words[wordIndex] ?? '', isDeleting),
});

const determineState = (
  displayText: string,
  currentWord: string,
  isDeleting: boolean
): TypewriterState => {
  if (displayText === currentWord && !isDeleting) return 'waiting';
  if (isDeleting) return 'deleting';
  return 'typing';
};

const calculateTimeout = (
  state: TypewriterState,
  speeds: { type: number; delete: number; delay: number }
): number => {
  switch (state) {
    case 'typing':
      return speeds.type;
    case 'deleting':
      return speeds.delete;
    case 'waiting':
      return speeds.delay;
    default:
      return speeds.type;
  }
};

const updateDisplayText = (
  context: TypewriterContext
): string => {
  switch (context.state) {
    case 'typing':
      return context.currentWord.slice(0, context.displayText.length + 1);
    case 'deleting':
      return context.displayText.slice(0, -1);
    case 'waiting':
      return context.displayText;
    default:
      return context.displayText;
  }
};

const shouldTransitionToDeleting = (context: TypewriterContext): boolean =>
  context.state === 'waiting';

const shouldAdvanceWord = (
  context: TypewriterContext,
  loop: boolean
): boolean =>
  context.state === 'deleting' && context.displayText === '' && loop;

export function useTypewriter(options: UseTypewriterOptions) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const { words, loop, typeSpeed, deleteSpeed, delaySpeed } = config;

  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const speeds = { type: typeSpeed, delete: deleteSpeed, delay: delaySpeed };

  const handleStateTransition = useCallback(
    (context: TypewriterContext) => {
      if (shouldTransitionToDeleting(context)) {
        setIsDeleting(true);
        return;
      }

      if (shouldAdvanceWord(context, loop)) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setDisplayText(updateDisplayText(context));
    },
    [words.length, loop]
  );

  useEffect(() => {
    if (words.length === 0) return;

    const context = createTypewriterContext(words, displayText, wordIndex, isDeleting);
    const timeout = calculateTimeout(context.state, speeds);

    const timeoutId = setTimeout(() => {
      handleStateTransition(context);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [displayText, wordIndex, isDeleting, words, handleStateTransition, speeds]);

  return {
    displayText,
    isCompleted: displayText === (words[wordIndex] ?? '') && !isDeleting,
    currentState: determineState(displayText, words[wordIndex] ?? '', isDeleting),
  } as const;
}
