module Types
  class RegistrationType < Types::BaseObject
    field :id, ID, null: false
    field :user, Types::UserType, null: false
    field :session, Types::SessionType, null: false
  end
end
