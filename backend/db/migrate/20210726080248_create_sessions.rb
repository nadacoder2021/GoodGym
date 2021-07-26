class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.string :title
      t.string :strapline
      t.string :description
      t.datetime :start_time
      t.string :image

      t.timestamps
    end
  end
end
