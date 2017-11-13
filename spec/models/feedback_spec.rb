require 'rails_helper'

RSpec.describe Feedback, type: :model do
  it { should have_valid(:style).when('Text long enough to pass validations and tests so I can move on with building my app.')}
  it { should_not have_valid(:style).when('')}

  it { should have_valid(:structure).when('Text long enough to pass validations and tests so I can move on with building my app.')}
  it { should_not have_valid(:structure).when('')}

  it { should have_valid(:mixdown).when('Text long enough to pass validations and tests so I can move on with building my app.')}
  it { should_not have_valid(:mixdown).when('')}

  it { should have_valid(:recomendations).when('URICODE')}

end
