import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "aurora-float": {
          "0%": { transform: "translate3d(0%, 0%, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.04)" },
          "100%": { transform: "translate3d(-3%, 2%, 0) scale(0.98)" },
        },
        "aurora-float-slow": {
          "0%": { transform: "translate3d(0%, 0%, 0) scale(1)" },
          "50%": { transform: "translate3d(-5%, 4%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(3%, -2%, 0) scale(0.99)" },
        },
        "aurora-float-reverse": {
          "0%": { transform: "translate3d(0%, 0%, 0) scale(1)" },
          "50%": { transform: "translate3d(3%, 4%, 0) scale(1.03)" },
          "100%": { transform: "translate3d(-4%, -3%, 0) scale(0.97)" },
        },
        "grain-drift": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "25%": { transform: "translate3d(-1.2%, 0.8%, 0)" },
          "50%": { transform: "translate3d(0.9%, -1%, 0)" },
          "75%": { transform: "translate3d(0.6%, 1%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        cursor: {
          "0%, 42%": { opacity: "1" },
          "43%, 58%": { opacity: "0" },
          "59%, 100%": { opacity: "1" },
        },
        sheen: {
          "0%, 100%": { transform: "translateX(-120%)" },
          "50%": { transform: "translateX(120%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "cursor-blink": {
          "0%, 42%": { opacity: "1" },
          "43%, 58%": { opacity: "0" },
          "59%, 100%": { opacity: "1" },
        },
        "role-sheen": {
          "0%, 78%": { transform: "translate3d(-140%, 0, 0)", opacity: "0" },
          "82%": { opacity: "0.12" },
          "92%": { opacity: "0.12" },
          "100%": { transform: "translate3d(220%, 0, 0)", opacity: "0" },
        },
        "cue-float": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0)" },
          "50%": { transform: "translate3d(0, 3px, 0)" },
        },
        fxFloat: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2.5%, -2%, 0) scale(1.02)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
      },
      animation: {
        "aurora-float": "aurora-float 22s ease-in-out infinite alternate",
        "aurora-float-slow":
          "aurora-float-slow 30s ease-in-out infinite alternate",
        "aurora-float-reverse":
          "aurora-float-reverse 26s ease-in-out infinite alternate",
        "grain-drift": "grain-drift 18s steps(6) infinite",
        cursor: "cursor 1s steps(1) infinite",
        sheen: "sheen 7s ease-in-out infinite",
        floatSlow: "floatSlow 2.8s ease-in-out infinite",
        "cursor-blink": "cursor-blink 1.6s step-end infinite",
        "role-sheen": "role-sheen 7.2s ease-in-out infinite",
        "cue-float": "cue-float 3.4s ease-in-out infinite",
        fxFloat: "fxFloat 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
