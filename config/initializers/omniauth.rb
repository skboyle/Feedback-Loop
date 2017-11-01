keys = Rails.application.secrets

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_CLIENT_SECRET'], scope: 'user-library-read user-top-read user-follow-read user-read-recently-played'
end
