import type { Config } from "next-globe-gen";

const config: Config = {
  locales: ["en", "es"],
  defaultLocale: "en",
  routes: {
    originDir: "./src/_app",
  }
};

export default config;