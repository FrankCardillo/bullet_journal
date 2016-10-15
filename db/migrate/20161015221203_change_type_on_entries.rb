class ChangeTypeOnEntries < ActiveRecord::Migration
  def change
    rename_column :entries, :type, :entry_type
  end
end
