class DropTableShivams < ActiveRecord::Migration[7.0]
  def change
    drop_table :shivams , if_exists: true

  end
end
