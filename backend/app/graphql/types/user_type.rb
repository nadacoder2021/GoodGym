module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :sessions, [Types::SessionType], null: false
    field :avatar, String, null: false

    def avatar
      "/img/default-avatar.png"
    end
  end
end
