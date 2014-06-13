class Outline < ActiveRecord::Base
  validates :title, presence: true
  has_many :steps

  def ordered_steps
    self.steps.order('number ASC')
  end
end
