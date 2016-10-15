class AddUserIdToEntries < ActiveRecord::Migration
  def up
    remove_column :entries, :page_id
    add_column :entries, :user_id, :integer
  end

  def down
    remove_column :entries, :user_id
    add_column :entries, :page_id, :integer
  end
end
