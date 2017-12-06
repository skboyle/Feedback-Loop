require "rails_helper"
RSpec.describe Api::V1::FeedbacksController, type: :controller do

  let!(:skibuddy) {User.create(name: "skibud22", email: "skibuddy@aol.com")}
  let!(:jet) {Song.create(name: "Jet Plane", artist_name: "Lake Bird", description: "Dj tool with Alan Watts. Any tips for making this song more engaging?", genre: "House", song_url: "songsong.com", image_url: "www.skiward.com", user: skibuddy)}
  let!(:jet2) {Song.create(name: "Jet Plane2", artist_name: "Lake Bird2", description: "Dj tool with Alan Watts. Any tips for making this song more engaging?2", genre: "House2", song_url: "songsong.com2", image_url: "www.skiward.com2", user: skibuddy )}
  let!(:jet_feedback1) {Feedback.create(user: skibuddy, song_id: jet.id, structure: "wow", mixdown: "nice", style: "cool")}
  let!(:jet_feedback2) {Feedback.create(user: skibuddy, song_id: jet2.id, structure: "Excellent snowmaking", mixdown: "Black Diamond Bar is the place to go for apres ski", style: "We stayed slopeside and it was awesome!")}
  let!(:jet_fav) {Favorite.create(user: skibuddy, song_id: jet.id, heart: 1 )}

  describe "GET#index" do
    it "should return a list of all of the Feedbacks" do
      get :index
      returned_json = JSON.parse(response.body)
      feedbacks = returned_json

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(feedbacks.length).to eq 2
      expect(feedbacks[0]["user_id"]).to eq skibuddy.id
      expect(feedbacks[0]["song_id"]).to eq jet.id
      expect(feedbacks[0]["structure"]).to eq "wow"
      expect(feedbacks[0]["mixdown"]).to eq "nice"
      expect(feedbacks[0]["style"]).to eq "cool"

    end
  end

end
