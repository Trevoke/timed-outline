class Step < ActiveRecord::Base
  belongs_to :outline
  before_create :numberize

  def numberize
    self.number = self.outline.steps.count + 1
  end
end
