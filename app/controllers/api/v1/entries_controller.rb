class Api::V1::EntriesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    respond_with Entry.all
  end

  def show
  end

  def new
  end

  def create
    respond_with :api, :v1, Entry.create(entry_params)
  end

  def edit
  end

  def update
    entry = Entry.find(params[:id])
    entry.update_attributes(entry_params)
    respond_with entry, json: entry
  end

  def destroy
    respond_with Entry.destroy(params[:id])
  end

  private

  def entry_params
    params.require(:entry).permit(:id, :page_id, :type, :content)
  end
end
