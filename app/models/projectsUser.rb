class ProjectsUser < ActiveRecord::Base
  validates :role, inclusion: { in: %w(READER, WRITER, MANAGER),
            message: "%{value} is not a valid size" }
  belongs_to :user
  belongs_to :project
end
