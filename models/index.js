const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

const Page = db.define('pages', {
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  Page.beforeSave((pageInstance, optionsObject) => {
    pageInstance.slug = generateSlug(pageInstance.title);
  })

  function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }
  
  const User = db.define('users', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  // const models = { db }
  
  module.exports = { db, Page, User };
  

