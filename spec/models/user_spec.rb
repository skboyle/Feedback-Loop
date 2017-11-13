require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:name).when("username1")}

  it { should have_valid(:email).when("johnsmith@gmail.com")}

  it { should have_valid(:website_url).when("soundcloud.com")}
end
