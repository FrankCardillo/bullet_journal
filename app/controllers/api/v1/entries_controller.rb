class Api::V1::EntriesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
  end

  def show
    respond_with Entry.find(params[:id])
  end

  def new
  end

  def create
    Entry.create(entry_params)
  end

  def edit
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
        render json: { data: Entry.find_by(page_id: params[:page_id]) }
      end
    end
  end

  private

  def entry_params
    params.require(:entry).permit(:id, :page_id, :type, :content)
  end
end
