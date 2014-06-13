class OutlinesController < ApplicationController
  def index
    @outlines = Outline.all
  end

  def create
    @outline = Outline.new outline_params
    if @outline.save
      redirect_to outlines_url
    else
      redirect_to outlines_url, error: "Son of a gun. Da doggone utline ain't in da book."
    end
  end

  def show
    @outline = Outline.find params.fetch(:id)
    @step = Step.new
  end

  private

  def outline_params
    params.require(:outline).permit(:title)
  end
end
