let state = new Vue ({
  el: '#block_art',
  data: {
    currentPost: "",
    currentComment: " ",
    showPost: false,
    blocks: [
      { title: 'Статья 1',
        text: "Здесь идет текст статьи 1",
        comments: [""],
      },
      { title: 'Статья 2',
        text: "Здесь идет текст статьи 2",
        comments: [""],
      },
      { title: 'Статья 3',
        text: "Здесь идет текст статьи 3",
        comments: [""],
      },
      { title: 'Статья 4',
        text: "Здесь идет текст статьи 4",
        comments: [""],
      },
      { title: 'Статья 5',
        text: "Здесь идет текст статьи 5",
        comments: [""],
      },
    ],
  },
  
  methods: {
    open_post: function(post) {
      console.log(post.title, post.text);
      this.currentPost = post;
      this.showPost = true;
    },

    comment: function() {
      console.log(this.currentComment);
      this.currentPost.comments.push(this.currentComment);
    }
  },
})
