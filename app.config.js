import "dotenv/config";

export default {
  expo: {
    name: "ChatApp-AJOin",
    version: "1.0.0",
    slug: "chat-app-ajoin",
    owner: "arunjojo2786",
    orientation: "portrait",
    userInterfaceStyle: "light",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],

    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.ajoin.chatapp",
    },
    web: {
      favicon: "./assets/fav-icon.png",
    },

    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,

      eas: {
        projectId: "49619bbe-0ab8-450b-b016-2db8446e68df",
      },
    },
  },
};
