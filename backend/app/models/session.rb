class Session < ActiveRecord::Base
  has_many :registrations
  has_many :users, through: :registrations

  def signups
    users
  end
end
