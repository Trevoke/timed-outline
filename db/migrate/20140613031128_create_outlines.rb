class CreateOutlines < ActiveRecord::Migration
  def change
    create_table :outlines do |t|
      t.string :title

      t.timestamps
    end
  end
end
