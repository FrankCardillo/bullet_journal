class Api::V1::PagesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    respond_with Page.all
  end

  def show
  end

  def new
  end

  def create
    respond_with :api, :v1, Page.create(entry_params)
  end

  def edit
  end

  def update
    page = Page.find(params[:id])
    page.update_attributes(page_params)
    respond_with page, json: page
  end

  def destroy
    respond_with Page.destroy(params[:id])
  end

  private

  def page_params
    params.require(:page).permit(:id, :title, :page_number, :user_id)
  end
end
