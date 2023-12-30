import { ConfettiFirstParam, confetti } from "@tsparticles/confetti";

const realisticConfettis: [number, ConfettiFirstParam][] = [
  [
    0.25,
    {
      spread: 26,
      startVelocity: 55,
    },
  ],
  [
    0.2,
    {
      spread: 60,
    },
  ],
  [
    0.35,
    {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    },
  ],
  [
    0.1,
    {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    },
  ],
  [
    0.1,
    {
      spread: 120,
      startVelocity: 45,
    },
  ],
];

export default function useConfetti() {
  const fire = () => {
    const shapeOptions = {
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🤡", "🌈", "🍀", "⭐"],
        },
      },
    };
    const withEmojis = Math.random() > 0.5 ? shapeOptions : {};
    const defaultOptions: ConfettiFirstParam = {
      origin: { y: 0.7 },
      ...withEmojis,
    };
    realisticConfettis.forEach(([particleRatio, confettiOptions]) => {
      confetti(
        Object.assign(confettiOptions, defaultOptions, {
          particleCount: Math.floor(200 * particleRatio),
        })
      );
    });
  };

  return { fire };
}
