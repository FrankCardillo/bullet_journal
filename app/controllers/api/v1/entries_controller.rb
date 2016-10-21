class Api::V1::EntriesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    info = [current_user.entries, current_user.id]
    respond_with info
  end

  def create
    Entry.create(entry_params)
  end

  def update
    entry = Entry.find(params[:id])
    entry.update_attributes(entry_params)
    respond_with entry, json: entry
  end

  def destroy
    Entry.destroy(params[:id])
    respond_to do |format|
      format.json do
        render json: { data: Entry.find_by(user_id: params[:user_id]) }
      end
    end
  end

  private

  def entry_params
    params.require(:entry).permit(:id, :user_id, :entry_type, :content)
  end
end
