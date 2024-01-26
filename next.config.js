require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH,
    reactStrictMode: true,
    output: "export",
}

module.exports = nextConfig