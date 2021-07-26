class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|

      t.references :user
      t.references :session
      t.timestamps
    end
  end
end
