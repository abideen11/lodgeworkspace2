class CreateHosts < ActiveRecord::Migration[6.0]
  def change
    create_table :hosts do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :rental
      t.integer :max_days
      t.integer :price
      t.string :rental_img1
      t.string :rental_img2
      t.boolean :fave

      t.timestamps
    end
  end
end
