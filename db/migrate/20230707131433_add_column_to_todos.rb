class AddColumnToTodos < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :worker_id , :integer
  end
end
