class FixColumnNameOftodos < ActiveRecord::Migration[7.0]
  def change
    rename_column :todos, :task, :title

  end
end
