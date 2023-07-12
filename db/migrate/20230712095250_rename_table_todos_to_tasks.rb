class RenameTableTodosToTasks < ActiveRecord::Migration[7.0]
  def change
    rename_table :todos ,:tasks
  end
end
