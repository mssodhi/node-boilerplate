const { User, Profile } = require('../models');

const service = {
  async findById(id) {
    return await Profile.findById(id, {
      include: [{ model: User, as: 'user' }]
    });
  }
};

module.exports = service;
