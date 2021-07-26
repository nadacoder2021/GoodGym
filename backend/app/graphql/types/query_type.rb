module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :current_user, Types::UserType, null: false

    field :sessions, [Types::SessionType], null: false

    field :session, Types::SessionType, null: false do
      argument :id, ID, required: true
    end

    def current_user
      User.first
    end

    def session(id:)
      Session.find(id)
    end

    def sessions
      Session.all
    end
  end
end
