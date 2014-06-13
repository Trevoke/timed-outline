class StepsController < ApplicationController
  def create
    outline = Outline.find params.fetch(:outline_id)
    Step.create! step_params
    redirect_to outline_path(outline)
  end

  private

  def step_params
    params.require(:step).permit(:outline_id, :step, :time)
  end

end
