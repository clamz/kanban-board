class Project < ActiveRecord::Base
  # Associations
  has_many :projectsUser
  has_many :users, through: :projectsUser

  #Validations 
  validates :name, presence: true, uniqueness: true
end
