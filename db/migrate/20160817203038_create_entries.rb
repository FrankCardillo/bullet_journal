class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :page_id
      t.string :type
      t.string :content
    end
  end
end
