class StepsController < ApplicationController
  def create
    outline = Outline.find params.fetch(:outline_id)
    Step.create! step_params
    redirect_to outline_path(outline)
  end

  def destroy
    Step.destroy params[:id]
    render json: { id: params[:id] }
  end

  private

  def step_params
    params.require(:step).permit(:outline_id, :step, :time)
  end

end
