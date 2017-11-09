# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
  {email: "Buddy1@gmail.com",
    name: "MoogHead",
    website_url: "buddy.com"
  },
  {email: "Buddy2@gmail.com",
    name: "AllRoland",
    website_url: "buddy2.com"
  },
  {email: "Buddy3@gmail.com",
    name: "KorgLover",
    website_url: "buddy3.com"
  },
  {email: "Buddy4@gmail.com",
    name: "BigKick",
    website_url: "buddy4.com"
  },
  {email: "Buddy5@gmail.com",
    name: "HouseHead",
    website_url: "buddy5.com"
  }
]

user1 = User.create(user_list[0])
user2 = User.create(user_list[1])
user3 = User.create(user_list[2])
user4 = User.create(user_list[3])
user5 = User.create(user_list[4])


song_list = [
  {name: "Jet Plane",
  artist_name: "Lake Bird",
  genre: "House",
  description: "Dj tool with Alan Watts. Any tips for making this song more engaging?",
  song_url: "https://soundcloud.com/user-36832311/jet-plane/s-FujmT",
  image_url: 'https://i1.sndcdn.com/artworks-000252780773-rgy43a-t500x500.jpg',
  user_id: 2
  },
  {name: "Locket",
  artist_name: "New Ruins",
  genre: "Ambient",
  description: "Synthezier drones",
  song_url: "https://soundcloud.com/user-36832311/locket/s-ShnNs",
  image_url: 'https://i1.sndcdn.com/artworks-000252786842-2u6qww-t500x500.jpg',
  user_id: 3
  },
  {name: "Rounds Perceived",
  artist_name: "CJX",
  genre: "House",
  description: "Goofy house though 90s lense.",
  song_url: "https://soundcloud.com/user-36832311/rounds-perceived/s-1qtfd",
  image_url: 'https://i1.sndcdn.com/artworks-000252791258-zyahdx-t500x500.jpg',
  user_id: 4
  },
  {name: "BR18",
  artist_name: "DJHTMHD",
  genre: "Techno",
  description: "https://soundcloud.com/user-36832311/br18/s-A1xU4",
  song_url: "Maximalist Techno. Looking for mix feedback.",
  image_url: 'https://i1.sndcdn.com/artworks-000252779126-xpys6o-t500x500.jpg',
  user_id: 5
  },
  {name: "Blood & Releif",
  artist_name: "Cartist",
  genre: "House",
  description: "Slow Dreamy house music.",
  song_url: "https://soundcloud.com/user-36832311/blood-releif/s-L0jhV",
  image_url: 'https://i1.sndcdn.com/artworks-000252792749-b84ydo-t500x500.jpg',
  user_id: 1
  },
  {name: "Kashif",
  artist_name: "Unfunk",
  genre: "House",
  description: "Off kilter house. looking for structure feedback.",
  song_url: "https://soundcloud.com/user-36832311/kashif/s-5rjtC",
  image_url: 'https://i1.sndcdn.com/artworks-000252789527-8ldmy4-t500x500.jpg',
  user_id: 1
  },
  {name: "Gift",
  artist_name: "Bluest Light",
  genre: "House",
  description: "Warm analog house jam",
  song_url: "https://soundcloud.com/user-36832311/bluest-light/s-YdQGF",
  image_url: 'https://i1.sndcdn.com/artworks-000252785078-49c4sz-t500x500.jpg',
  user_id: 2
  },
  {name: "GMAR",
  artist_name: "HexCoder",
  genre: "House",
  description: "Left-field house",
  song_url: "https://soundcloud.com/user-36832311/gift-me-a-rainbow/s-RJHXw",
  image_url: 'https://i1.sndcdn.com/artworks-000252792482-w67cnh-t500x500.jpg',
  user_id: 3
  },
  {name: "Cozy Drifter",
  artist_name: "Cozy Drifter",
  genre: "House",
  description: "Experimental house. How's my structure?",
  song_url: "https://soundcloud.com/user-36832311/cozy-drifter/s-MTEEe",
  image_url: 'https://i1.sndcdn.com/artworks-000252789128-iy7f22-t500x500.jpg',
  user_id: 4
  },
  {name: "Sequin Lover",
  artist_name: "Sequin Lover",
  genre: "House",
  description: "Smooth Strutting",
  song_url: "https://soundcloud.com/user-36832311/sequin-lover/s-nPeXs",
  image_url: 'https://i1.sndcdn.com/artworks-000252790379-z5p20n-t500x500.jpg',
  user_id: 5
  },
  {name: "In Color",
  artist_name: "J/J",
  genre: "Techno",
  description: "Collaboration",
  song_url: "https://soundcloud.com/user-36832311/in-color/s-zeIKj",
  image_url: 'https://i1.sndcdn.com/artworks-000252783047-xp1baj-t500x500.jpg',
  user_id: 1
  },
  {name: "Hello World",
  artist_name: "Sleeptrax",
  genre: "House",
  description: "House/Ambient experiment",
  song_url: "https://soundcloud.com/user-36832311/hello-world/s-bOhfx",
  image_url: 'https://i1.sndcdn.com/artworks-000252790031-cni5ih-t500x500.jpg',
  user_id: 2
  }
]

song1 = Song.create(song_list[0])
song2 = Song.create(song_list[1])
song3 = Song.create(song_list[2])
song4 = Song.create(song_list[3])
song5 = Song.create(song_list[4])
song6 = Song.create(song_list[5])
song7 = Song.create(song_list[6])
song8 = Song.create(song_list[7])
song9 = Song.create(song_list[8])
song10 = Song.create(song_list[9])
song11 = Song.create(song_list[10])
song12 = Song.create(song_list[11])




feedback_list = [
  { structure: "Perfect!",
    mixdown: "What a good looking audience!",
    style: "Hire me!",
    recomendations: "spotify:track:1X0vTAe9yfqZMqNUnrgxCy",
    user_id: 1,
    song_id: 11
  },
  { structure: "Great tune!, you clearly don't need any help.",
    mixdown: "I don't know much about mixdowns but I love this website.",
    style: "That's a nice shirt Steve",
    recomendations: "spotify:track:2N7jDmtroOgogtklr93U6T",
    user_id: 2,
    song_id: 11
  },
  { structure: "Perfect!",
    mixdown: "What a good looking audience!",
    style: "Hire me!",
    recomendations: "spotify:track:1X0vTAe9yfqZMqNUnrgxCy",
    user_id: 3,
    song_id: 11
  },
  { structure: "Great tune!, you clearly don't need any help.",
    mixdown: "I don't know much about mixdowns but I love this website.",
    style: "That's a nice shirt Steve",
    recomendations: "spotify:track:2N7jDmtroOgogtklr93U6T",
    user_id: 4,
    song_id: 11
  },
  { structure: "Great tune!, you clearly don't need any help.",
    mixdown: "I don't know much about mixdowns but I love this website.",
    style: "That's a nice shirt Steve",
    recomendations: "spotify:track:2N7jDmtroOgogtklr93U6T",
    user_id: 4,
    song_id: 10
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


favorite1 = Favorite.create(user_id: 1, song_id: 1, heart: 1)
favorite2 = Favorite.create(user_id: 1, song_id: 2, heart: 1)
favorite3 = Favorite.create(user_id: 1, song_id: 3, heart: 1)
favorite4 = Favorite.create(user_id: 2, song_id: 1, heart: 1)
favorite5 = Favorite.create(user_id: 2, song_id: 2, heart: 1)
favorite6 = Favorite.create(user_id: 2, song_id: 3, heart: 1)
favorite7 = Favorite.create(user_id: 3, song_id: 1, heart: 1)
favorite8 = Favorite.create(user_id: 3, song_id: 3, heart: 1)
favorite9 = Favorite.create(user_id: 4, song_id: 1, heart: 1)
favorite10 = Favorite.create(user_id: 4, song_id: 3, heart: 1)

# album_list = [
#   { user_id: 1,
#     name: "albumtitle",
#     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     genre: "House",
#   },
#   { user_id: 2,
#     name: "albumtitle2",
#     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     genre: "Disco",
#   },
#   { user_id: 3,
#     name: "albumtitle3",
#     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     genre: "Techno",
#   }
# ]
#
# album1 = Album.create(album_list[0])
# album2 = Album.create(album_list[1])
# album3 = Album.create(album_list[2])
#
# collection1 = Collection.create(song_id: 1, album_id: 1)
# collection2 = Collection.create(song_id: 2, album_id: 1)
# collection3 = Collection.create(song_id: 3, album_id: 2)
# collection4 = Collection.create(song_id: 4, album_id: 2)
