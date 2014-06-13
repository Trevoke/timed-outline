class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.references :outline
      t.integer    :number
      t.string     :step

      t.timestamps
    end
  end
end
