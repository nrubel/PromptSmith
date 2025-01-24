module.exports = {
  siteUrl: "https://promptsmith.nasiruddin.dev/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};
