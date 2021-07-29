module Types
  class MutationType < Types::BaseObject

    field :register, Types::RegistrationType, null: false do
      argument :session_id, ID, required: true
    end

    field :unregister, Boolean, null: false do
      argument :session_id, ID, required: true
    end

    def register(session_id:)
      Registration.find_or_create_by(user_id: User.first.id, session_id: session_id)
    end

    def unregister(session_id:)
      Registration.find_by(user_id: User.first.id, session_id: session_id)&.destroy
      true
    end
  end
end
