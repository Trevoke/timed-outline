class AddTimeToStep < ActiveRecord::Migration
  def change
    add_column :steps, :time, :integer_unsigned
  end
end
