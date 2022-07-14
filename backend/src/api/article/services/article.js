module.exports = {
  postsReport: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::article.article",
        {
          fields: ["id", "title", "author", "createdAt", "content"],
          populate: {
            author: {
              fields: ["name", "avatar"],
            },
          },
        }
      );

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.id,
            title: item.title || "",
            category: item.category.name || "",
            publishedDate: new Date(item.createdAt).toDateString() || "",
            authorName: item.author?.name || "",
            authorAvatar: item.author?.avatar || "",
          });
          return acc;
        }, []);
      }

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
};
