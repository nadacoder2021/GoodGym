module Types
  class SessionType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :strapline, String, null: false
    field :image, String, null: false
    field :start_time, GraphQL::Types::ISO8601DateTime, null: false
    field :signups, [Types::UserType], null: false

    def signups
      object.users
    end
  end
end
