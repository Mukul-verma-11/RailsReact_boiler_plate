class DropTableShivam < ActiveRecord::Migration[7.0]
  def change
    drop_table :shivam , if_exists: true
  end
end
