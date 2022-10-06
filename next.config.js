const API_KEY = 'b0ff54ec68ce385a475b7ddf13c81e4a';

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact/:path*',
        destination: '/form/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
