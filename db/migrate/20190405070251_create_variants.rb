class CreateVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :variants do |t|
      t.string :name
      t.decimal :price
      t.integer :product_id

      t.timestamps
    end
  end
end
