const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "drive.google.com" },       // ← added
      { protocol: "https", hostname: "lh3.googleusercontent.com" }, // ← Google Photos
      { protocol: "https", hostname: "i.ibb.co" },               // ← imgbb
      { protocol: "https", hostname: "i.imgur.com" },            // ← imgur
    ],
  },
};