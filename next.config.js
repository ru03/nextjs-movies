module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/people': { page: '/people' },
      '/shows': { page: '/shows' }
    };
  }
};