# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
  {email: "Buddy1@gmail.com",
    name: "Buddy1",
    website_url: "buddy.com"
  },
  {email: "Buddy2@gmail.com",
    name: "Buddy2",
    website_url: "buddy2.com"
  },
  {email: "Buddy3@gmail.com",
    name: "Buddy3",
    website_url: "buddy3.com"
  },
  {email: "Buddy4@gmail.com",
    name: "Buddy4",
    website_url: "buddy4.com"
  },
  {email: "Buddy5@gmail.com",
    name: "Buddy5",
    website_url: "buddy5.com"
  }
]

user1 = User.create(user_list[0])
user2 = User.create(user_list[1])
user3 = User.create(user_list[2])
user4 = User.create(user_list[3])
user5 = User.create(user_list[4])


song_list = [
  {name: "Song1",
  artist_name: "Cool Buddy",
  genre: "House",
  description: "This discription will repeat over and over and over again.",
  song_url: "https://soundcloud.com/stream",
  image_url: "https://i.pinimg.com/736x/f0/e3/d1/f0e3d1a335e41830613879055f1fc0f9--typo-design-print-design.jpg",
  user_id: 1
  },
  {name: "Song2",
  artist_name: "DJ Seed",
  genre: "Disco",
  description: "This discription will repeat over and over and over again.",
  song_url: "https://soundcloud.com/stream",
  image_url: "https://i.pinimg.com/736x/ac/c5/42/acc5427b31c414f86dd9d3b40a78b282--vinyl-cover-cover-art.jpg",
  user_id: 1
  },
  {name: "Song3",
  artist_name: "Artist Formerly Known As Seed",
  genre: "Electro",
  description: "This discription will repeat over and over and over again.",
  song_url: "https://soundcloud.com/stream",
  image_url: "https://i.pinimg.com/736x/ba/0a/72/ba0a72e8c5c756251c37f1e88988df4e--vinyl-cover-cover-art.jpg",
  user_id: 2
  },
  {name: "Song4",
  artist_name: "MC SEED",
  genre: "Techno",
  description: "This discription will repeat over and over and over again.",
  song_url: "https://soundcloud.com/stream",
  image_url: "https://i.pinimg.com/736x/58/9c/ac/589cac58d0debcf2fca6ea266ad88102--josef-albers-music-covers.jpg",
  user_id: 2
  },
  {name: "Song5",
  artist_name: "Lil' Seed",
  genre: "Soul",
  description: "This discription will repeat over and over and over again.",
  song_url: "https://soundcloud.com/stream",
  image_url: "https://i.pinimg.com/736x/6c/2b/72/6c2b72b1f7bdcf35dbd014b0dd3bcacd--album-covers-cover-art.jpg",
  user_id: 3
  }
]

song1 = Song.create(song_list[0])
song2 = Song.create(song_list[1])
song3 = Song.create(song_list[2])
song4 = Song.create(song_list[3])
song5 = Song.create(song_list[4])


feedback_list = [
  { structure: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mixdown: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    style: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    recomendations: "Listen to better music.",
    user_id: 1,
    song_id: 2
  },
  { structure: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mixdown: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    style: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    recomendations: "Listen to better music.",
    user_id: 2,
    song_id: 1
  },
  { structure: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mixdown: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    style: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    recomendations: "Listen to better music.",
    user_id: 3,
    song_id: 1
  },
  { structure: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mixdown: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    style: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    recomendations: "Listen to better music.",
    user_id: 3,
    song_id: 3
  },
  { structure: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mixdown: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    style: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    recomendations: "Listen to better music.",
    user_id: 4,
    song_id: 2
  }
]

feedback1 = Feedback.create(feedback_list[0])
feedback2 = Feedback.create(feedback_list[1])
feedback3 = Feedback.create(feedback_list[2])
feedback4 = Feedback.create(feedback_list[3])
feedback5 = Feedback.create(feedback_list[4])


upvote1 = Upvote.create(user_id: 1, feedback_id: 1, vote: 1 )
upvote2 = Upvote.create(user_id: 1, feedback_id: 2, vote: -1 )
upvote3 = Upvote.create(user_id: 1, feedback_id: 3, vote: 1 )
upvote4 = Upvote.create(user_id: 2, feedback_id: 1, vote: 1 )
upvote5 = Upvote.create(user_id: 2, feedback_id: 2, vote: -1 )
upvote6 = Upvote.create(user_id: 2, feedback_id: 3, vote: 1 )
upvote7 = Upvote.create(user_id: 3, feedback_id: 1, vote: -1 )
upvote8 = Upvote.create(user_id: 3, feedback_id: 2, vote: -1 )
upvote9 = Upvote.create(user_id: 3, feedback_id: 3, vote: 1 )
upvote10 = Upvote.create(user_id: 4, feedback_id: 2, vote: 1 )


favorite1 = Favorite.create(user_id: 1, song_id: 1)
favorite2 = Favorite.create(user_id: 1, song_id: 2)
favorite3 = Favorite.create(user_id: 1, song_id: 3)
favorite4 = Favorite.create(user_id: 2, song_id: 1)
favorite5 = Favorite.create(user_id: 2, song_id: 2)
favorite6 = Favorite.create(user_id: 2, song_id: 3)
favorite7 = Favorite.create(user_id: 3, song_id: 1)
favorite8 = Favorite.create(user_id: 3, song_id: 3)
favorite9 = Favorite.create(user_id: 4, song_id: 1)
favorite10 = Favorite.create(user_id: 4, song_id: 3)

album_list = [
  { user_id: 1,
    name: "albumtitle",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    genre: "House",
  },
  { user_id: 2,
    name: "albumtitle2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    genre: "Disco",
  },
  { user_id: 3,
    name: "albumtitle3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    genre: "Techno",
  }
]

album1 = Album.create(album_list[0])
album2 = Album.create(album_list[1])
album3 = Album.create(album_list[2])

collection1 = Collection.create(song_id: 1, album_id: 1)
collection2 = Collection.create(song_id: 2, album_id: 1)
collection3 = Collection.create(song_id: 3, album_id: 2)
collection4 = Collection.create(song_id: 4, album_id: 2)
