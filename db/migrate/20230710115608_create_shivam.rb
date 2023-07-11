class CreateShivam < ActiveRecord::Migration[7.0]
  def change
    create_table :shivams do |t|

      t.timestamps
    end
  end
end
