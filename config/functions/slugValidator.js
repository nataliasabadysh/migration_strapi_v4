module.exports = {
  // checks for valid characters and consecutive forward slashes
  slugCharacterValidator: function (slug) {
    const regex = new RegExp("^[a-z0-9\-\/]+(?:-[a-z0-9\-\/]+)*$|^$");
    if (!regex.test(slug)) {
      throw strapi.errors.badRequest('Please enter lower case letters, numbers, hyphens, or slashes for slugs. No spaces.');
    }
    const regex2 = new RegExp("^(?!.*\/\/)[a-z0-9\-\/]+(?:-[a-z0-9\-\/]+)*$|^$");
    if (!regex2.test(slug)) {
      throw strapi.errors.badRequest('Consecutive forward slashes are not allowed in slugs.');
    }
  },
  // a leading slash is required
  slugLeadingSlashValidator: function (slug) {
    if (slug?.slice(0, 1) !== '/') {
      throw strapi.errors.badRequest('Please add slash to the beginning of slugs.');
    }
  },
  // a leading slash is not allowed
  slugNoLeadingSlashValidator: function (slug) {
    if (slug?.slice(0, 1) === '/') {
      throw strapi.errors.badRequest('Do not add slash to the beginning of slugs.');
    }
  },
  // a leading dash is not allowed
  slugNoLeadingDashValidator: function (slug) {
    if (slug?.slice(0, 1) === '-') {
      throw strapi.errors.badRequest('Do not add dash to the beginning of slugs.');
    }
    if (slug?.includes('/-')) {
      throw strapi.errors.badRequest('Do not add dash after a slash.');
    }
  },
  // a trailing slash is required
  slugTrailingSlashValidator: function (slug) {
    if (slug?.slice(-1) !== '/') {
      throw strapi.errors.badRequest('Please add slash to the end of slugs.');
    }
  },
  // a trailing slash is not allowed
  slugNoTrailingSlashValidator: function (slug) {
    if (slug?.slice(-1) === '/') {
      throw strapi.errors.badRequest('Do not add slash to the end of slugs.');
    }
  },
  // a trailing dash is not allowed
  slugNoTrailingDashValidator: function (slug) {
    if (slug?.slice(-1) === '-') {
      throw strapi.errors.badRequest('Do not add dash to the end of slugs.');
    }
    if (slug?.includes('-/')) {
      throw strapi.errors.badRequest('Do not add dash before a slash.');
    }
  },
  // foward slashes are not allowed in the slug
  slugNoSlashValidator: function (slug) {
    if (slug?.includes('/')) {
      throw strapi.errors.badRequest('Do not add slash in slugs.');
    }
  },
}