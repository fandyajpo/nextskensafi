/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.geeksforgeeks.org",
      "encrypted-tbn0.gstatic.com",
      "d1sag4ddilekf6.azureedge.net",
      "cdn.decorilla.com",
      "a0.muscache.com",
      "drive.google.com",
      "cdn.discordapp.com",
      "res.cloudinary.com",
      "media.suara.com",
      "siap-sekolah.s3-ap-southeast-1.amazonaws.com",
      "foto.data.kemdikbud.go.id",
      "www.smkn1denpasar.sch.id",
      "smkn5denpasar.sch.id",
      "asset.kompas.com",
      "ik.imagekit.io",
    ],
  },
};

module.exports = nextConfig;
