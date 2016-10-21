class DeletePages < ActiveRecord::Migration
  def up
    drop_table :pages
  end

  def down
    create_table "pages", force: :cascade do |t|
      t.integer "user_id"
      t.string  "title"
      t.integer "page_number"
    end
  end
end
