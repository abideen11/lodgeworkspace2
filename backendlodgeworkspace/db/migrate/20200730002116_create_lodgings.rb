class CreateLodgings < ActiveRecord::Migration[6.0]
  def change
    create_table :lodgings do |t|
      t.integer :host_id
      t.integer :user_id
      t.integer :booking

      t.timestamps
    end
  end
end
