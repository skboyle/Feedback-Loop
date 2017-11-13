require 'rails_helper'

RSpec.describe Song, type: :model do
  it { should have_valid(:name).when('Steamboat', 'Sunday River')}
  it { should_not have_valid(:name).when('')}

  it { should have_valid(:description).when('Text long enough to pass validations and tests so I can move on with building my app.')}
  it { should_not have_valid(:description).when('')}

  it { should have_valid(:song_url).when('soundcloud.com')}
  it { should_not have_valid(:song_url).when('')}

  it { should have_valid(:genre).when('House', 'Techno')}
  it { should_not have_valid(:genre).when('')}

end
